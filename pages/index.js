import React from 'react'
import Head from 'next/head'
import BannerPodcast from '../components/BannerPodcast'
import Header from '../components/Header'
import Counseling from '../components/Counseling'
import AboutMe from '../components/AboutMe'
import Ayudarte from '../components/Ayudarte'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ScrollToTop from '../components/ScrollToTop'
import { IconButton } from '@mui/material'
import Fab from '@mui/material/Fab'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function Home() {

  const fabStyle = {
    margin: 0,
    top: 40,
    right: 20,
    bottom: 'auto',
    left: 'auto',
    position: 'fixed',
  }

  return (
    <div>
      <Head>
        <title>Liane Reinshagen</title>
        <meta name="description" content="Sitio oficial de Liane" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fab color='primary' sx={fabStyle}>
        <IconButton color='neutral' href='https://api.whatsapp.com/send?phone=5491149899116'>
          <WhatsAppIcon />
        </IconButton>
      </Fab>

      <ScrollToTop showBelow={200} />

      <Header />
      {/* Componentes:
        - navbar (responsive menu hamburguesa a barra horizontal con titulo superior)
        - firma (responsive centrada sobre navbar a desplazada sobre el sillon, tamaño variable)
      Cosas que podemos resolver sin necesidad de declarar mas componentes, solo con css o props de mui:
        - sillon de fondo (dimensiones y posicionamiento vertical responsive) */}

      <Counseling />

      <AboutMe />
      {/* Componentes:
        - introcounseling (nada complejo, comportamiento casi identico)
        - presentacion (responsive stack vertical a grid 2d con titulo y foto a la izq de texto)
        - presentacion2 (nada complejo, pero en el sketch de mobile la foto final aparece antes?)
      Cosas que podemos resolver sin necesidad de declarar mas componentes, solo con css o props de mui:
        - sillon de fondo (dimensiones y posicionamiento vertical responsive) */}


      <Ayudarte />
      <FAQ />


      <ContactForm />

      <BannerPodcast />
      {/* Este por ahora quedo izi pizi mas adelante tendra que llevar links pero por ahora es un texto con titulo centrado,
      podría hasta ir aca mismo dentro del index sin ser componente, solo dos LnTypo */}


      <Footer />
      {/* El footer ahora tiene dos partecinhas

      Componentes:
        - firmalogo (izi imagen centrada con fondo estilizado)
        - footer con copy y links */}
    </div>
  )
}
