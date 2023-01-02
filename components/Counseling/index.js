import LnTypo from '../LnTypo'
import { Grid } from '@mui/material'
import React from 'react'


function Counseling() {
  return (
    <div className="counselingContainer">
      <Grid container direction='column'>

        <LnTypo variant='h6'>¿QUÉ ES EL COUNSELING?</LnTypo>

        <Grid id="counselingQuote">
          <LnTypo variant='body1'> El Counseling es la disciplina de ayuda que integra conocimientos del campo de la filosofía,
            la psicología, la educación, la sociología, y la antropología, con la intención de asistir al ser
            humano en el proceso de crecimiento, desarrollo y despliegue de sus potencialidades.
          </LnTypo>
          <LnTypo> Andrés Sánchez Bodas

          </LnTypo>
        </Grid>
        <Grid id="counselingDefinition">
          <LnTypo variant='body1'>
            El counseling (consultoría psicológica en español)
            es una profesión de ayuda para el bienestar y
            salud emociona y mental. Hace énfasis en la escucha activa, la aceptación positiva incondicional y
            la congruencia del profesional que la ejerce. El enfoque es horizontal. No hay  comillas pacientes comillas
            que con
            paciencia tienen que esperar cura desde una autoridad superior. Es un espacio terapéutico de
            rigurosa confidencialidad que promueve el bienestar y la salud mental. El counseling ayuda a que
            el y la consultante puedan prevenir o revertir el arraigo de problemas a través del
            autoconocimiento y del crecimiento personal. Se resuelven los problemas cuando reconocemos y
            entendemos sus orígenes y rectificamos la situación.
          </LnTypo>
        </Grid>
      </Grid>
    </div>
  )
}

export default Counseling
