import LnTypo from '../LnTypo'
import { Grid, Paper } from '@mui/material'
import React from 'react'




function Counseling() {
  return (

    <div id="counseling" >
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={3}
      >

        <Grid item sm={6} md={8}>
          <LnTypo variant='h6' id='subtitleBlue'>¿QUÉ ES EL COUNSELING?
          </LnTypo>
        </Grid>
        <Grid item sm={6} md={4}></Grid>

        <Grid item sm={12} >
          <Paper id='counselingQuote' >
            <LnTypo variant='body1'> &quot;El Counseling es la disciplina de ayuda que integra conocimientos del campo de la filosofía,
              la psicología, la educación, la sociología, y la antropología, con la intención de asistir al ser
              humano en el proceso de crecimiento, desarrollo y despliegue de sus potencialidades.&quot;
            </LnTypo>
            <LnTypo id='quoteAuthor'> Andrés Sánchez Bodas
            </LnTypo>
          </Paper>
        </Grid>
        <Grid item sm={12} id="counselingDefinition">
          <LnTypo variant='body1'>
            El counseling (consultoría psicológica en español)
            es una profesión de ayuda para el bienestar y
            salud emociona y mental. Hace énfasis en la escucha activa, la aceptación positiva incondicional y
            la congruencia del profesional que la ejerce. El enfoque es horizontal. No hay  &quot; pacientes &quot;
            que con
            paciencia tienen que esperar cura desde una autoridad superior. Es un espacio terapéutico de
            rigurosa confidencialidad que promueve el bienestar y la salud mental. El counseling ayuda a que
            el y la consultante puedan prevenir o revertir el arraigo de problemas a través del
            autoconocimiento y del crecimiento personal. Se resuelven los problemas cuando reconocemos y
            entendemos sus orígenes y rectificamos la situación.
          </LnTypo>
        </Grid>
      </Grid>
    </div >
  )
}

export default Counseling
