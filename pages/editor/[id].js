import { React, useMemo, useState, } from 'react'
import { useSession, } from 'next-auth/react'
import Head from 'next/head'
import debounce from 'lodash/debounce'
import throttle from 'lodash.throttle'
import { Alert, Box, Grid, Snackbar } from '@mui/material'
import Editor from '../../components/Editor'
import Login from '../../components/Login'
import prisma from '../../lib/prisma'

const cooldownApi = 15 //en segundos

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

  // manage snackbar (notification) logic
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  //useMemo porque el valor puede cambiar desde que se llama la funcion y se termina el cooldown
  const throttledUpdate = useMemo(
    () =>
      throttle(content => {
        updatePost(props.post.id, content)
          .then(setOpen(true))
      }, cooldownApi * 1000),
    [props, data]
  )

  //se guarda en el cliente 600 ms despues de que no haya mas keystrokes
  const debouncedOnChange = debounce(
    (data) => {
      setData(data)
      throttledUpdate(data) //se llama a la api, a traves de un throttle
    }, 600
  )

  if (session && status === 'authenticated') {
    return (
      <>
        <Head>
          <title>Editor</title>
          <link rel="icon" href="/gear.ico" />
        </Head>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {open ? `Autoguardado! (${cooldownApi} segundos)` : ''}
          </Alert>
        </Snackbar>
        <Box m={{ xs: '30px', sm: '100px' }}>
          <Grid container>
            <Grid item xs={12}>
              <Editor
                value={props.post.content ? props.post.content : `<h1>${props.post.title}</h1>`}
                onChange={(data) => {
                  debouncedOnChange(data)
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
