import { Grid } from '@mui/material'
import React from 'react'
import LnTypo from '../LnTypo'


function AboutMe() {
  return (
    //id usado para hashlinkear
    <div id='aboutme'>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={3}
      >
        <Grid
          container
          item
          direction='column'
          alignItems='center'
          justifyContent='center'
          md={6}
          spacing={2}>

          <Grid item md={12} >
            <LnTypo variant='h3'>¿Quien Soy?</LnTypo>
          </Grid>
          <Grid item md={12}>
            <img
              id='profilePicture'
              alt='liane'
              src='/aboutMePictureSq.jpg' />
          </Grid>
        </Grid>


        <Grid
          container
          item
          direction='column'
          alignItems='center'
          justifyContent='center'
          md={6}
          spacing={2}>
          <Grid item sm={12}>
            <LnTypo variant='body1' id='upperSection'>
              Soy mexicana. Soy trilingüe y bicultural. Tengo una licenciatura y una maestría de la UNAM y un PhD
              (Doctorado) de la Universidad de Washington, en Seattle. He sido intérprete, traductora y consultora
              de lenguas naturales aplicadas a la cibernética. Me califiqué como Doula en Montevideo. Me formé
              como counselor en Buenos Aires. Mis grados académicos y calificaciones profesionales me habilitan
              para trabajar como counselor (consultora psicológica), pero es mi experiencia de vida la que me hace
              diferente:</LnTypo>
          </Grid>
          <Grid item sm={12}>
            <LnTypo variant='body1' id='upperSection'>
              Me he mudado treinta y tres veces. He vivido, estudiado y trabajado en cinco países (México, Suiza,
              Alemania, Estados Unidos, Uruguay) antes de venir a radicarme a la Argentina.
              He dado clases en seis universidades. He trabajado con psiquiatras, psicoanalistas, psicólogos y
              counselors. Esta experiencia me preparó para entender y ayudar a resolver problemas de
              comunicación, ubicación y de conflicto emocional.</LnTypo>
          </Grid>
          <Grid item sm={12}>
            <LnTypo variant='body1' id='upperSection'>Durante años de estudios y de docencia en cuatro de estos países tuve la oportunidad de observar y
              vivir las dificultades que pueden surgir en el contacto diario entre personas, con frecuencia agravadas
              por diferencias de procedencia nacional y cultural. Muchas veces suponer que se dice lo mismo por
              hablar el mismo idioma detona explosiones imprevistas.</LnTypo>
          </Grid>
          <Grid item sm={12}>
            <LnTypo variant='body1' id='upperSection'> Decidí cambiar mi actividad de docente por la de counselor, porque me permite combinar y aprovechar
              mis conocimientos de disciplinas diversas, mis aptitudes pedagógicas y de comunicación interpersonal
              y mi sensibilidad ante el conflicto, el sufrimiento y el dolor humano.</LnTypo>
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}

export default AboutMe
