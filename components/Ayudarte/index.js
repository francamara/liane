import React from 'react'
import LnTypo from '../LnTypo'
import { Grid, Typography } from '@mui/material'

function Ayudarte() {
  return (
    <div id='ayudarte'>
      <div className='ayudarteIntro'>
        <Grid container
          alignItems='center'
          direction='row'
          justifyContent='flex-end'
          spacing={4}>

          <Grid item sm={12}>
            <Typography variant='h4' id='subtitleBlue' align='left'>¿CÓMO PUEDO AYUDARTE?</Typography>
          </Grid>
          <Grid item sm={5}></Grid>
          <Grid item sm={7}
            alignContent='flex-end'>
            <LnTypo variant='body1'> En las consultas conmigo, el paso y el camino los decides tú.
              Yo te acompaño y te apoyo con toda mi
              atención y la experiencia de mis horas de vuelo. Tus problemas e inquietudes merecen un espacio en
              donde atenderlos: a tu ritmo; a tus tiempos;
              en un espacio seguro, cálido, respetuoso y confidencial.
              Imagínate que te ofrezco una mesa enorme, bien iluminada en la que puedes volcar y vaciar tu mochila,
              tus bolsillos, tu mente, tu corazón, tu alma.
              Te has llenado de cosas que te pesan y no te dejan
              encontrar lo que sí necesitas
              y quieres. Esto lo puedes hacer sin recibir críticas, ni quejas, ni opiniones,
              ni consejos, ni juicios como los que suelen venir de la pareja, la familia, l@s amig@s, jefes,
              compañer@s de trabajo. Todos,
              por muy bien intencionados que puedan ser, están enredados en y con
              tu contexto; y no tienen una
              formación profesional concentrada exclusivamente en tu bienestar.
              Te ofrezco un espacio propio para tus problemas que,
              si lo son para ti, no son chicos ni grandes.</LnTypo>

          </Grid>
        </Grid>
      </div>
      <div id='ayudarteList'>
        <Grid container
          direction='column'
          alignContent='left'
          alignItems='flex-start'>
          <Grid item sm={12}>
            <LnTypo>Los procesos pueden ser breves y muy concretos o se van definiendo sobre la marcha.</LnTypo>
          </Grid>
          <Grid item sm={12}>
            <LnTypo>Algunos de los
              temas que he trabajado en mi consultorio son:</LnTypo>
          </Grid>
          <Grid item sm={12}>
            <ul>
              <li>-Conclusión de tesis o proyectos laborales</li>
              <li>-Mudanzas o reubicaciones</li>
              <li>-Cambios de estado civil</li>
              <li>-Cambios de etapa</li>
              <li>-Conflictos culturales o religiosos</li>
              <li>-Familias ensambladas</li>
              <li>-Crisis puntuales</li>
              <li>-Parálisis general</li>
              <li>-Cuestionamientos existenciales</li>
              <li>-Toma de decisiones</li>
            </ul>
          </Grid>
          <Grid item sm={12}>
            <LnTypo variant='body1'> Atiendo en español, inglés y alemán.</LnTypo>
          </Grid>

        </Grid>
      </div>
      <img
        id='footsandwoman'
        alt='Pies en la play y señora tomando café'
        src='/campoLiane.jpg' />
      <div id='elPincheMito'>
        <Grid container spacing={4}>
          <Grid item sm={12}>
            <LnTypo variant='h3' id='subtitleBlue'>EL PINCHE MITO</LnTypo>
          </Grid>
          <Grid item sm={12}>
            <LnTypo variant='body1'>El pinche mito es un podcast para no fundamentalistas,
              donde hablo de diferentes temas que
              resultan recurrentes en mi consulta que me han llevado a la expresión de que esto u otro es un
              &quot; pinche mito &quot;.
              Lo que lo hace mito, es que no es verdad y se da por hecho y consagrado y por lo
              que me merece la adjetivación enojada del muy mexicano &quot;pinche &quot;,
              es cuando ese mito genera
              sufrimiento en su entorno.
              Esto generalmente sucede por las expectativas que estos pinches mitos
              nos generan, a nosotros,
              sobre otros o de terceros. Suelen ser creencias que no nos benefician.</LnTypo>
          </Grid>
        </Grid>
      </div>
    </div >
  )
}

export default Ayudarte
