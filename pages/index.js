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


      <Hero />
      {/* Componentes:
        - introcounseling (nada complejo, comportamiento casi identico)
        - presentacion (responsive stack vertical a grid 2d con titulo y foto a la izq de texto)
        - presentacion2 (nada complejo, comportamiento casi identico pero en el sketch de mobile la foto final aparece antes?)
      Cosas que podemos resolver sin necesidad de declarar mas componentes, solo con css o props de mui:
        - sillon de fondo (dimensiones y posicionamiento vertical responsive) */}

      <BannerPodcast />
      {/* Este por ahora quedo izi pizi mas adelante tendra que llevar links pero por ahora es un texto con titulo centrado,
      podría hasta ir aca mismo dentro del index sin ser componente, solo dos LnTypo */}

      <Mensaje />
      {/* La idea de lo que hacia este componente se movio al blog, esto pasaría a ser lo sig

      Componentes:
        - FAQ (falta diseño y data, asi que ponemos cualquier cosa para mostrar y si no nos dan nada para llenar lo dejamos fuera de la v1)
        - ContactForm (responsive stack vertical a grid 2d con titulo y foto a la izq de texto)
      Cosas que podemos resolver sin necesidad de declarar mas componentes, solo con css o props de mui:
        - imagen de fondo oscurecida */}

      <Footer />
      {/* El footer ahora tiene dos partecinhas

      Componentes:
        - firmalogo (izi imagen centrada con fondo estilizado)
        - footer con copy y links */}
    </div>
  )
}
