import { Grid } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
// import YouTubeIcon from '@mui/icons-material/YouTube'
// import PodcastsIcon from '@mui/icons-material/Podcasts'
import LnTypo from '../LnTypo'

function Footer() {
  return (
    <div id='footer'>

      {/*segundo item, links de footer internos, redes sociales, declaracion de derechos*/}
      <Grid container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}>

        <Grid item sm={10}>

          <LnTypo variant='body1' className='footerText'>Copyright © 2023. Liane Reinshagen Joho/ El Pinche mito - All Right Reserved</LnTypo>
        </Grid>

        <Grid item
          sm={2}
          textAlign='center'>
          <a href='https://www.linkedin.com/in/clr-liane-reinshagen-joho-phd-36118557' target="_blank" rel="noreferrer">
            <LinkedInIcon color='primary' />
          </a>
          <a href='https://www.instagram.com/lianereinshagen/' target="_blank" rel="noreferrer">
            <InstagramIcon color='primary' />
          </a>
          {/* <YouTubeIcon color='primary' /> */}
          {/* <PodcastsIcon color='primary' /> */}
        </Grid>


      </Grid>


    </div >
  )
}

export default Footer
