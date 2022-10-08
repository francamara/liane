import { Button, Grid } from '@mui/material'
import React from 'react'
import LnTypo from '../LnTypo'
import Link from 'next/link'

//TODO preguntar por orden de links, relevancia, SEO, etc
const navLinkData = [
  { item: 'Inicio', ref: '/' },
  { item: '¿Qué es counselling?', ref: '#hero' },
  { item: '¿Quién Soy?', ref: '#aboutme' },
  { item: '¿Cómo puedo ayudarte?', ref: '#mensaje' },
  { item: 'El Pinche Mito', ref: '#bannerPodcast' },
  { item: 'Contáctame', ref: '#footer' }
]


function Header() {
  return (
    //define altura del componente entero
    <div>
      <div id='portada' >


        <div id='navbar'>
          <Grid container direction={{ xs: 'column', sm: 'row' }} justifyContent='center' alignItems='center' spacing={{ xs: '0', sm: '24' }}>
            {navLinkData.map((navLink, i) => (
              <Grid item sm='auto' key={i}>
                <Button id='myButton'>
                  <Link href={navLink.ref} >
                    <LnTypo variant='h6'>{navLink.item}</LnTypo>
                  </Link>
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
        <div id='signatureCont'>

          <img className='signatureLiane' src='/Logo-Liane.svg' />
        </div>

      </div>
      <div id='bannerPodcast'>
        <Grid container direction={{ xs: 'column', sm: 'row' }} justifyContent='center' alignItems='center'>
          <Grid item sm='auto' container justifyContent='center'>
            <img id='bannerPodcastPicture' src='/bannerPodcastPicture.svg' alt='fotoparaelpodcast'></img>
          </Grid>
          <Grid item sm='auto' container justifyContent='center'>
            <img id='bannerPodcastLogo' src='/Logo-para-banner-podcast.svg' />
          </Grid>
          <Grid item sm='auto' container justifyContent='center' alignItems='center'>
            <LnTypo id='bannerSloganPodcast' variant='h4'> &quot;Un podcast para no fundamentalistas&quot; </LnTypo>
          </Grid>
        </Grid>

      </div>
    </div >
  )
}

export default Header
