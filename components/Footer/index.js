import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PodcastsIcon from '@mui/icons-material/Podcasts'


function Footer() {
  return (
    <div id='footer'>

      {/*segundo item, links de footer internos, redes sociales, declaracion de derechos*/}
      <Grid container
        direction='row'
        justifyContent='center'
        alignItems='flex-end'>

        <Grid item sm={3}
        >
          <Link href="/">
            <a className='footerText'>Home</a>
          </Link>
        </Grid>

        <Grid item sm={6}>

          <a className='footerText'>Copyright © 2023. Liane Reinshagen Joho/ El Pinche mito - All Right Reserved</a>
        </Grid>

        <Grid item sm={3}>
          <LinkedInIcon color='primary' />
          <InstagramIcon color='primary' />
          <YouTubeIcon color='primary' />
          <PodcastsIcon color='primary' />
        </Grid>


      </Grid>


    </div >
  )
}

export default Footer
