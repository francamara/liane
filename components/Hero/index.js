
import { Grid } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import React from 'react'
import LnTypo from '../LnTypo'


function Hero() {
  const isXs = useMediaQuery('(max-width:600px)')
  return (
    //id usado para hashlinkear, se fija tamaño aca pero no debería,
    //hay que separar el hero en dos componentes
    <div className='aboutMeBackground'>
      <div id='hero' style={{ display: 'flex', alignItems: 'center' }}>
        <Grid container direction='column'>
          <Grid item container spacing={4} id='upperSection' direction='row' justifyContent='center' alignItems='center' marginY={4}>
            <Grid item xs={10} sm={3}>
              <LnTypo variant='body1'>  elit incididunt et in in enim exercitation et dolore proident cillum. Incididunt elit sit magna non culpa ea. Anim fugiat velit tempor incididunt. Lorem eiusmod consequat eiusmod minim dolore culpa excepteur.</LnTypo>
            </Grid>
            <Grid item xs={10} sm={3}>
              <LnTypo variant='body1'>  elit incididunt et in in enim exercitation et dolore proident cillum. Incididunt elit sit magna non culpa ea. Anim fugiat velit tempor incididunt. Lorem eiusmod consequat eiusmod minim dolore culpa excepteur.</LnTypo>
            </Grid>
            <Grid item xs={10} sm={3}>
              <LnTypo variant='body1'>  elit incididunt et in in enim exercitation et dolore proident cillum. Incididunt elit sit magna non culpa ea. Anim fugiat velit tempor incididunt. Lorem eiusmod consequat eiusmod minim dolore culpa excepteur.</LnTypo>
            </Grid>

          </Grid>
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
        </Grid >


      </div >
    </div>
  )
}

export default Hero
