import { Button, Grid } from '@mui/material'
import React from 'react'
import LnTypo from '../LnTypo'
import Link from 'next/link'

//TODO preguntar por orden de links, relevancia, SEO, etc
const navLinkData = [{ item: 'Inicio', ref: '/' },
{ item: '¿Qué es counselling?', ref: '#hero' },
{ item: '¿Quién Soy?', ref: '#aboutme' },
{ item: '¿Cómo puedo ayudarte?', ref: '#mensaje' },
{ item: 'El Pinche Mito', ref: '#bannerPodcast' },
{ item: 'Contáctame', ref: '#footer' }]


function Header() {
  return (
    //define altura del componente entero
    <div style={{ height: '100vh' }}  >
      <div id='portada' >


        <div id='navbar'>
          {navLinkData.map((navLink) => (
            <Button id='myButton'> <Link href={navLink.ref} ><LnTypo variant='h6'>{navLink.item}</LnTypo></Link></Button>
          ))}
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
