import { Grid } from '@mui/material'
import React from 'react'
import LnTypo from '../LnTypo'



{/*TODO agregar link al podcast*/ }
function BannerPodcast() {
  return (
    <div id='bannerPodcast'>
      <Grid container direction={{ xs: 'column', sm: 'row' }} justifyContent='center' alignItems='center'>
        <Grid item sm='auto' container justifyContent='center'>
          <img id='bannerPodcastLogo' src='/Logo-para-banner-podcast.svg' />
        </Grid>
        <Grid item sm='auto' container justifyContent='center' alignItems='center'>
          <LnTypo id='bannerSloganPodcast'> &quot;Un podcast para no fundamentalistas.&quot; </LnTypo>
        </Grid>
      </Grid>

    </div>
  )
}

export default BannerPodcast
