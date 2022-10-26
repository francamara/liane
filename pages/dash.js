import React from 'react'
import { getSession, useSession } from 'next-auth/react'
import Router from 'next/router'
import { Box, Button, Grid } from '@mui/material'
import Login from '../components/Login'
import prisma from '../lib/prisma'
import PostsList from '../components/PostList'

export async function getServerSideProps(context) {

  const session = await getSession(context)
  const posts = JSON.parse(JSON.stringify(await prisma.post.findMany()))

  return {
    props: { session, posts }
  }
}

async function createPost() {
  await fetch('/api/post/', {
    method: 'POST',
  })
  await Router.push('/dash')
}

export default function Dashboard(props) {
  const { data: session, status } = useSession()

  if (session && status === 'authenticated') {
    return (
      <Box m={{ xs: '30px', sm: '100px' }}>
        <Grid container>
          <Grid item xs={6}>
            <Button variant='contained' color='success' onClick={() => (createPost())}>
              CREAR NUEVO POST
            </Button>
          </Grid>
          <Grid item xs={6} display='flex' justifyContent='flex-end'>
            <Login />
          </Grid>
        </Grid>
        <PostsList props={{ posts: props.posts }} />
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
