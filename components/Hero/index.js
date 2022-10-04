
import { Grid } from '@mui/material'
import React from 'react'
import LnTypo from '../LnTypo'


function Hero() {
  return (
    //id usado para hashlinkear, se fija tamaño aca pero no debería,
    //hay que separar el hero en dos componentes
    <div id='hero' style={{ height: '80vh', display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={10} direction='column'>
        <Grid item container spacing={4} id='upperSection' direction='row' justifyContent='center' alignContent='center'>
          <Grid item xs={2.5}>
            <LnTypo variant='body1'>  elit incididunt et in in enim exercitation et dolore proident cillum. Incididunt elit sit magna non culpa ea. Anim fugiat velit tempor incididunt. Lorem eiusmod consequat eiusmod minim dolore culpa excepteur.</LnTypo>
          </Grid>
          <Grid item xs={2.5}>
            <LnTypo variant='body1'>  elit incididunt et in in enim exercitation et dolore proident cillum. Incididunt elit sit magna non culpa ea. Anim fugiat velit tempor incididunt. Lorem eiusmod consequat eiusmod minim dolore culpa excepteur.</LnTypo>
          </Grid>
          <Grid item xs={2.5}>
            <LnTypo variant='body1'>  elit incididunt et in in enim exercitation et dolore proident cillum. Incididunt elit sit magna non culpa ea. Anim fugiat velit tempor incididunt. Lorem eiusmod consequat eiusmod minim dolore culpa excepteur.</LnTypo>
          </Grid>

        </Grid>
        <div id='aboutme'>
          <Grid item container spacing={6} id='lowerSection' direction='row' justifyContent='center' alignContent='center'>
            <Grid item xs={4} container justifyContent='flex-end'>
              <Grid item>
                <img
                  id='profilePicture'
                  alt='liane'
                  src='/aboutMePictureSq.jpg' />
              </Grid>
            </Grid>
            <Grid item xs={5} container alignContent='center'>
              <LnTypo variant='h3'>Quien Soy</LnTypo>
              <LnTypo variant='body1'>
                Quis aute occaecat nulla id consequat consequat eu officia ullamco incididunt. U
                llamco nisi officia mollit mollit ea culpa id sit nulla nostrud. Pariatur amet Lorem et no
                n sint. Enim Lorem labore ex quis elit la
                bore dolore aliquip. Quis tempor labore dolore esse sunt consequat. Aute cillum consequat ex du
                is elit aliquip ad.

                Commodo magna sit dolore cupidatat eiusmod in reprehenderit anim ea laboris.
                Ipsum enim laborum proident elit incididunt cupidatat anim irure amet nisi.</LnTypo>
              <LnTypo variant='body1'>
                Quis aute occaecat nulla id consequat consequat eu officia ullamco incididunt. U
                llamco nisi officia mollit mollit ea culpa id sit nulla nostrud. Pariatur amet Lorem et no
                n sint. Enim Lorem labore ex quis elit la
                bore dolore aliquip. Quis tempor labore dolore esse sunt consequat. Aute cillum consequat ex du
                is elit aliquip ad.

                Commodo magna sit dolore cupidatat eiusmod in reprehenderit anim ea laboris.
                Ipsum enim laborum proident elit incididunt cupidatat anim irure amet nisi.</LnTypo>
            </Grid>
          </Grid>
        </div>
      </Grid>


    </div >
  )
}

export default Hero
