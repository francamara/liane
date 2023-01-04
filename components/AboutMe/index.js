import { Grid } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import React from 'react'
import LnTypo from '../LnTypo'


function AboutMe() {
  const isXs = useMediaQuery('(max-width:600px)')
  return (
    //id usado para hashlinkear
    <div id='aboutme'>
      <Grid item container spacing={{ xs: 2, sm: 6 }} id='lowerSection' direction='row' justifyContent='center' alignItems='center' marginY={4}>
        <Grid item xs={3} sm={3} container justifyContent='flex-end'>
          <Grid item>
            <img
              id='profilePicture'
              alt='liane'
              src='/aboutMePictureSq.jpg' />
          </Grid>
        </Grid>
        {/*media query, si es XS, pone el titulo en fila con la foto*/}
        {isXs ? <Grid item xs={7.5} sm={7} container justifyContent='flex-start'>
          <LnTypo variant='h3'>Quien Soy</LnTypo>
        </Grid> : ''}

        <Grid item xs={10} sm={6} container alignContent='center'>
          {/*media query, si NO es XS, pone el titulo sobre el texto*/}
          {isXs ? '' : <Grid item xs={7.5} sm={7} container justifyContent='flex-start'>
            <LnTypo variant='h3'>Quien Soy</LnTypo>
          </Grid>}
          <LnTypo variant='body1'>
            Soy mexicana. Soy trilingüe y bicultural. Tengo una licenciatura y una maestría de la UNAM y un PhD
            (Doctorado) de la Universidad de Washington, en Seattle. He sido intérprete, traductora y consultora
            de lenguas naturales aplicadas a la cibernética. Me califiqué como Doula en Montevideo. Me formé
            como counselor en Buenos Aires. Mis grados académicos y calificaciones profesionales me habilitan
            para trabajar como counselor (consultora psicológica), pero es mi experiencia de vida la que me hace
            diferente:</LnTypo>
          <LnTypo variant='body1'>
            Me he mudado treinta y tres veces. He vivido, estudiado y trabajado en cinco países (México, Suiza,
            Alemania, Estados Unidos, Uruguay) antes de venir a radicarme a la Argentina.
            He dado clases en seis universidades. He trabajado con psiquiatras, psicoanalistas, psicólogos y
            counselors. Esta experiencia me preparó para entender y ayudar a resolver problemas de
            comunicación, ubicación y de conflicto emocional.</LnTypo>
          <LnTypo variant='body1'>Durante años de estudios y de docencia en cuatro de estos países tuve la oportunidad de observar y
            vivir las dificultades que pueden surgir en el contacto diario entre personas, con frecuencia agravadas
            por diferencias de procedencia nacional y cultural. Muchas veces suponer que se dice lo mismo por
            hablar el mismo idioma detona explosiones imprevistas.</LnTypo>
          <LnTypo variant='body1'> Decidí cambiar mi actividad de docente por la de counselor, porque me permite combinar y aprovechar
            mis conocimientos de disciplinas diversas, mis aptitudes pedagógicas y de comunicación interpersonal
            y mi sensibilidad ante el conflicto, el sufrimiento y el dolor humano.</LnTypo>
        </Grid>
      </Grid>
    </div>
  )
}

export default AboutMe
