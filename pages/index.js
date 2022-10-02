import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>El Pinche Mito</title>
        <meta name="description" content="Sitio oficial del podcast El Pinche Mito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}
