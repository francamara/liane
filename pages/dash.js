import React from 'react'
import { getSession, useSession } from 'next-auth/react'
import Login from '../components/Login'
import { Box, Button, IconButton, Grid, Paper } from '@mui/material'
import LnTypo from '../components/LnTypo'
import DeleteIcon from '@mui/icons-material/Delete'
import Router from 'next/router'
import prisma from '../lib/prisma'

export async function getServerSideProps(context) {

  const session = await getSession(context)
  const posts = JSON.parse(JSON.stringify(await prisma.post.findMany()))

  return {
    props: { session, posts }
  }
}

async function publishPost(id) {
  await fetch(`/api/post/publish/${id}`, {
    method: 'PUT',
  })
  await Router.push('/dash')
}

async function deletePost(id) {
  await fetch(`/api/post/delete/${id}`, {
    method: 'DELETE',
  })
  await Router.push('/dash')
}

async function createPost() {
  await fetch('/api/post/', {
    method: 'POST',
  })
  await Router.push('/dash')
}

function dateHelper(isoString) {
  return `${isoString.substr(8, 2)}/${isoString.substr(5, 2)}/${isoString.substr(0, 4)} - ${isoString.substr(11, 5)}`
}

export default function Dashboard(props) {
  const { data: session, status } = useSession()

  if (session && status === 'authenticated') {
    return (
      <Box m={{ xs: '30px', sm: '100px' }}>
        <Grid item xs={6} display='flex' justifyContent='flex-end'>
          <Login />
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Button variant='contained' color='success' onClick={() => (createPost())}>CREAR NUEVO POST</Button>
          </Grid>
          {props.posts?.map((post, i) => (
            <Grid item xs={6} key={i}>
              <Paper
                sx={{
                  p: 2,
                  flexGrow: 1,
                }}>
                <Grid container columns={6} spacing={1}>

                  <Grid item xs={5}>
                    <LnTypo variant='h3'>
                      {post.title}
                    </LnTypo>
                  </Grid>
                  <Grid item xs={1} display='flex' justifyContent='flex-end'>
                    <IconButton color='error' onClick={() => (deletePost(post.id))}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={3}>
                    <LnTypo variant='subtitle'>
                      Creado: {dateHelper(post.createdAt)}
                    </LnTypo>
                  </Grid>
                  <Grid item xs={3}>
                    <LnTypo variant='subtitle'>
                      Actualizado: {dateHelper(post.updatedAt)}
                    </LnTypo>
                  </Grid>
                  {!post.published ?
                    <Grid item xs>
                      <Button variant='outlined' color='secondary' size='small' onClick={() => (publishPost(post.id))}>
                        PUBLICAR
                      </Button>
                    </Grid >
                    :
                    <Grid item xs>
                      <LnTypo variant='subtitle'>
                        Publicado: {dateHelper(post.publishedAt)}
                      </LnTypo>
                    </Grid >
                  }
                </Grid>
              </Paper>
            </Grid >
          ))}
        </Grid>
      </Box >
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
