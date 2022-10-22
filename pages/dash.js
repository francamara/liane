import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Editor from '../components/Editor'
import Login from '../components/Login'

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>El Pinche Mito</title>
        <meta name="description" content="Sitio oficial del podcast El Pinche Mito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
      <Editor />
      <Footer />
    </div>
  )
}
