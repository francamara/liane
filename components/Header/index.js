import { Button, Grid } from '@mui/material'
import React from 'react'
import LnTypo from '../LnTypo'
import Link from 'next/link'


function Header() {
  return (
    //define altura del componente entero
    <div style={{ height: '100vh' }}  >
      <div id='portada' >


        <div id='navbar'>
          {/*TODO preguntar por orden de links, relevancia, SEO, etc*/}
          <Button id='myButton'> <Link href='/'><LnTypo variant='h6'>Inicio</LnTypo></Link></Button>
          <Button id='myButton'> <Link href='#hero'><LnTypo variant='h6'>¿Qué es counselling?</LnTypo></Link></Button>
          <Button id='myButton'> <Link href='#aboutme'><LnTypo variant='h6'>¿Quién Soy?</LnTypo></Link></Button>
          <Button id='myButton'> <Link href='#mensaje'><LnTypo variant='h6'>¿Cómo puedo ayudarte?</LnTypo></Link></Button>
          <Button id='myButton'> <Link href='#bannerPodcast'><LnTypo variant='h6'>El Pinche Mito</LnTypo></Link></Button>
          <Button id='myButton'> <Link href='#footer'><LnTypo variant='h6'>Contáctame</LnTypo></Link></Button>
        </div>

        <img className='signatureLiane' src='/Logo-Liane.svg'></img>

      </div>
      <div id='bannerPodcast'>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={2} container justifyContent='flex-end'>
            <img id='bannerPodcastPicture' src='/bannerPodcastPicture.svg' alt='fotoparaelpodcast'></img>
          </Grid>
          <Grid item xs={3} container alignItems='stretch'>
            <img id='bannerPodcastLogo' src='/Logo-para-banner-podcast.svg' />
          </Grid>
          <Grid item xs={2} container justifyContent='flex-start'>
            <Grid item xs>
              <LnTypo id='bannerSloganPodcast' variant='h4'> &quot;Un podcast para no fundamentalistas&quot; </LnTypo>
            </Grid>
          </Grid>
        </Grid>

      </div>
    </div>
  )
}

export default Header
