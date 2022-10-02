import { Grid, Divider } from '@mui/material'
import React from 'react'
import LnTypo from '../LnTypo'

//TODO arreglar tamaño y comentar
function Hero() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item sm={3}>
          <LnTypo variant='p'>  elit incididunt et in in enim exercitation et dolore proident cillum. Incididunt elit sit magna non culpa ea. Anim fugiat velit tempor incididunt. Lorem eiusmod consequat eiusmod minim dolore culpa excepteur.</LnTypo>
        </Grid>
        <Grid item sm={3}>
          <LnTypo variant='p'>  elit incididunt et in in enim exercitation et dolore proident cillum. Incididunt elit sit magna non culpa ea. Anim fugiat velit tempor incididunt. Lorem eiusmod consequat eiusmod minim dolore culpa excepteur.</LnTypo>
        </Grid>
        <Grid item sm={3}>
          <LnTypo variant='p'>  elit incididunt et in in enim exercitation et dolore proident cillum. Incididunt elit sit magna non culpa ea. Anim fugiat velit tempor incididunt. Lorem eiusmod consequat eiusmod minim dolore culpa excepteur.</LnTypo>
        </Grid>

      </Grid>
      <Divider></Divider>
      <Grid container spacing={8}>
        <Grid item md={5}>
          <div id='profilePictureContainer'>
            <div id='profilePictrue'>pfp</div>
          </div>
        </Grid>
        <Grid item md={7}>
          <LnTypo variant='h4'>Quien Soy</LnTypo>
          <LnTypo variant='p'>
            Quis aute occaecat nulla id consequat consequat eu officia ullamco incididunt. U
            llamco nisi officia mollit mollit ea culpa id sit nulla nostrud. Pariatur amet Lorem et no
            n sint. Enim Lorem labore ex quis elit la
            bore dolore aliquip. Quis tempor labore dolore esse sunt consequat. Aute cillum consequat ex du
            is elit aliquip ad.

            Commodo magna sit dolore cupidatat eiusmod in reprehenderit anim ea laboris.
            Ipsum enim laborum proident elit incididunt cupidatat anim irure amet nisi .</LnTypo>
        </Grid>
      </Grid>
    </div>
  )
}

export default Hero
