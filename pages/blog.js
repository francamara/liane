import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import LnTypo from '../components/LnTypo'
import { Button } from '@mui/material'
import prisma from '../lib/prisma'

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
      <div className='wrapper'>
        <div className='blogpage'>
          {props.posts?.map((post, i) => (<div id={i} key={i} hidden>
            <LnTypo variant='h3'>{post.title}</LnTypo>
            <LnTypo variant='subtitle'>{post.publishedAt.slice(0, 10)}</LnTypo>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          ))}
          <div className='buttons'>
            {page < props.posts.length - 1 ?
              <Button id='next' variant='outline' onClick={() => setPage(page + 1)}> Cargar otro post </Button> : <LnTypo variant='subtitle'>Llegaste al fin del blog!</LnTypo>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
