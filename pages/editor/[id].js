import { React, useMemo, useState, useCallback, } from 'react'
import { useSession, } from 'next-auth/react'
import debounce from 'lodash/debounce'
import throttle from 'lodash.throttle'
import { Alert, Box, Grid, Snackbar } from '@mui/material'
import Editor from '../../components/Editor'
import Login from '../../components/Login'
import prisma from '../../lib/prisma'

export async function getServerSideProps(context) {
  const { id } = context.query
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  })

  return { //          HACK ANTI-BUG EPICO
    props: { post: JSON.parse(JSON.stringify(post)) }
  }
}

async function updatePost(id, content) {
  await fetch(`/api/post/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  })
}

export default function PostEditor(props) {
  const { data: session, status } = useSession()
  //aca vive post.content
  const [data, setData] = useState('')

  // manage snackback (notification) logic
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }


  //useMemo porque el valor puede cambiar durante el delay
  const throttledUpdate = useMemo(
    () =>
      throttle(content => {
        updatePost(props.post.id, content)
          .then(setOpen(true))
      }, 1000 * 15), //<- cantidad de segundos de cooldown
    [props, data]
  )
  const saveChanges = useCallback(
    args => {
      throttledUpdate(args)
    },
    [throttledUpdate]
  )
  //se guarda en el cliente medio segundo despues de que no haya mas keystrokes
  const debouncedOnChange = debounce(setData, 500)
  //una vez registrado un nuevo valor de data, actualizo el valor en la ref al throttle, que ejecuta la funcion


  if (session && status === 'authenticated') {
    return (
      <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {open ? `${'Autoguardado! (15 segundos)'}` : ''}
          </Alert>
        </Snackbar>
        <Box m={{ xs: '30px', sm: '100px' }}>
          <Grid container>
            <Grid item xs={12}>
              <Editor
                value={props.post.content}
                onChange={(data) => {
                  debouncedOnChange(data)
                  saveChanges(data)
                }} />
            </Grid>
            <Grid item xs>
              {data}
            </Grid>
          </Grid>
        </Box>
      </>
    )
  }

  return (
    <Box height='100vh' display='flex' alignItems='center'>
      <Box flex={1} textAlign='center'>
        <Login />
      </Box>
    </Box>
  )
}
