import React from 'react'
import Head from 'next/head'
import BannerPodcast from '../components/BannerPodcast'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Mensaje from '../components/Mensaje'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>El Pinche Mito</title>
        <meta name="description" content="Sitio oficial del podcast El Pinche Mito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BannerPodcast />
      <Hero />
      <Mensaje />
      <Footer />
    </div>
  )
}
