import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PodcastsIcon from '@mui/icons-material/Podcasts'
import LnTypo from '../LnTypo'

function Footer() {
  return (
    <div id='footer'>

      {/*segundo item, links de footer internos, redes sociales, declaracion de derechos*/}
      <Grid item md={3} container direction='row' spacing={12} justifyContent='center' alignItems='center'>

        <Grid item xs={3}>
          <Link href="/">
            <a className='footerText'>Home</a>
          </Link>
        </Grid>

        <Grid item xs={10}>

          <a className='footerText'>Copyright © 2023. Liane Reinshagen Joho/ El Pinche mito - All Right Reserved</a>
        </Grid>

        <Grid item xs={6}>
          <LinkedInIcon color='primary' />
          <InstagramIcon color='primary' />
          <YouTubeIcon color='primary' />
          <PodcastsIcon color='primary' />
        </Grid>

        <Grid item xs>
          <LnTypo variant='subtitle2'>@2022 El Pinche Mito. Derechos reservados.</LnTypo>
        </Grid>
      </Grid>

      {/*tercer item, firma*/}
      <Grid item xs={10} md={3} container>

      </Grid>
    </div >
  )
}

export default Footer
