import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LnTypo from '../components/LnTypo'
import ScrollToTop from '../components/ScrollToTop'
import { Button, Divider, Paper, Typography } from '@mui/material'
import prisma from '../lib/prisma'
import { Stack } from '@mui/system'

export async function getServerSideProps() {
  const posts = await JSON.parse(JSON.stringify(await prisma.post.findMany({
    where: {
      published: true
    },
    orderBy: {
      publishedAt: 'desc'
    }
  })))

  return {
    props: { posts }
  }
}

export default function Blog(props) {
  const [page, setPage] = useState(0)

  useEffect(() => {
    document.getElementById(page).hidden = false
  }, [page])

  return (
    <div>
      <Head>
        <title>El Pinche Mito Blog</title>
        <meta name="description" content="Blog oficial del podcast El Pinche Mito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ScrollToTop showBelow={200} />
      <Stack className='wrapper'
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>
        {props.posts?.map((post, i) => (<Paper id={i} key={i} className='blogPost' hidden>
          <Typography variant='h3' align='left'>{post.title}</Typography>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <Typography variant='h6' align='right'>{post.publishedAt.slice(0, 10)}</Typography>
        </Paper>
        ))}
        <Paper className='blogPost'>
          {page < props.posts.length - 1 ?
            <Button id='next' variant='outline' onClick={() => setPage(page + 1)}> Siguiente post </Button> : <LnTypo variant='subtitle'>Llegaste al fin del blog!</LnTypo>}
        </Paper>
      </Stack>
      <Footer />
    </div>
  )
}
