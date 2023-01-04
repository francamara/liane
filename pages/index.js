import React from 'react'
import Head from 'next/head'
import BannerPodcast from '../components/BannerPodcast'
import Header from '../components/Header'
import Counseling from '../components/Counseling'
import AboutMe from '../components/AboutMe'
import Mensaje from '../components/Mensaje'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liane Reinshagen</title>
        <meta name="description" content="Sitio oficial de Liane" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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


      <Mensaje />
      {/* La idea de lo que hacia este componente se movio al blog, esto pasaría a ser lo sig

      Componentes:
        - FAQ (falta diseño y data, hacer algo asi nomas y pedir contenido o descartar)
        - ContactForm (responsive stack vertical a grid 2d con titulo y foto a la izq de texto)
      Cosas que podemos resolver sin necesidad de declarar mas componentes, solo con css o props de mui:
        - imagen de fondo oscurecida */}

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
