import { React, useMemo, useState, } from 'react'
import { useSession, } from 'next-auth/react'
import Link from 'next/link'
import Head from 'next/head'
import debounce from 'lodash/debounce'
import throttle from 'lodash.throttle'
import { Alert, Box, Divider, Fab, Paper, Snackbar, TextField } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Editor from '../../components/Editor'
import Login from '../../components/Login'
import prisma from '../../lib/prisma'

const cooldownApi = 15 //en segundos

export async function getServerSideProps(context) {
  const { id } = context.query
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
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

async function renamePost(id, title) {
  await fetch(`/api/post/rename/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(title)
  })
}

export default function PostEditor(props) {
  const { data: session, status } = useSession()
  //aca vive post.content
  const [data, setData] = useState('')
  //aca vive post.title
  const [title, setTitle] = useState(props.post.title)

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

  const throttledRename = useMemo(
    () =>
      throttle(content => {
        renamePost(props.post.id, content)
          .then(setOpen(true))
      }, cooldownApi * 1000),
    [props, data]
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

        <Box mx={{ xs: '30px', md: '100px' }} mt={{ xs: '10px' }}>
          <Link href='/dash' passHref>
            <Fab>
              <ArrowBackIcon />
            </Fab>
          </Link>


          <Box my={{ xs: '20px', md: '50px' }}>
            <Paper sx={{ p: 1, my: 2 }}>
              <TextField my={1} value={title} fullWidth
                onChange={(event) => setTitle(event.target.value)}
                onBlur={(event) => throttledRename(event.target.value)} />
              <Divider width='100%' sx={{ my: 1 }} />
              <Editor
                value={props.post.content ? props.post.content : `<h1>${props.post.title}</h1>`}
                onChange={(data) => {
                  debouncedOnChange(data)
                }} />
            </Paper>
          </Box>

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
