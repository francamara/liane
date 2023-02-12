import { Grid, Paper, Typography } from '@mui/material'
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

        <Grid item sm={8} md={8}>
          <Typography variant='h5' id='subtitleBlue' align='left'>¿QUÉ ES EL COUNSELING?
          </Typography>
        </Grid>
        <Grid item sm={4} md={4}></Grid>

        <Grid item sm={12} >
          <Paper id='counselingQuote' >
            <Typography variant='body1' align='left'> &quot;El Counseling es la disciplina de ayuda que integra conocimientos del campo de la filosofía,
              la psicología, la educación, la sociología, y la antropología, con la intención de asistir al ser
              humano en el proceso de crecimiento, desarrollo y despliegue de sus potencialidades.&quot;
            </Typography>
            <Typography id='quoteAuthor' align='left'> Andrés Sánchez Bodas
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={12} id="counselingDefinition">
          <Typography variant='body1' align='left'>
            El counseling (consultoría psicológica en español)
            es una profesión de ayuda para el bienestar y
            salud emocional y mental. Hace énfasis en la escucha activa, la aceptación positiva incondicional y
            la congruencia del profesional que la ejerce. El enfoque es horizontal. No hay  &quot; pacientes &quot;
            que con
            paciencia tienen que esperar cura desde una autoridad superior. Es un espacio terapéutico de
            rigurosa confidencialidad que promueve el bienestar y la salud mental. El counseling ayuda a que
            el y la consultante puedan prevenir o revertir el arraigo de problemas a través del
            autoconocimiento y del crecimiento personal. Se resuelven los problemas cuando reconocemos y
            entendemos sus orígenes y rectificamos la situación.
          </Typography>
        </Grid>
      </Grid>
    </div >
  )
}

export default Counseling
