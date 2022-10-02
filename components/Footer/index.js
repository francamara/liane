import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

function Footer() {
  return (
    //div fijando altura para PC, TODO hacer que todo funque con grid y usar xs y sm para hacer todo responsive
    <div style={{ height: '30vh', backgroundColor: '#F4F0DB', display: 'flex', alignItems: 'center' }}>

      {/*contenedor del footer, con sus tres items, dos de los cuales tambien son contenedores*/}
      <Grid container direction='row' justifyContent='space-around'>


        {/*el primer item, logo y tres lineas de texto que todavia no tenemos TODO*/}
        <Grid item xs={4} container direction='column' spacing={2} alignItems='center'>

          <Grid item xs>
            <Typography variant='h2'>LOGO</Typography>
          </Grid>

          <Grid item xs>
            <Typography variant='body2'>Enim qui cillum labore veniam quis cillum reprehenderit.</Typography>
            <Typography variant='body2'>Qui pariatur nisi tempor deserunt non anim minim deserunt anim.</Typography>
            <Typography variant='body2'>Ea laborum enim ea incididunt ullamco laboris non et Lorem anim nulla ullamco eu.</Typography>
          </Grid>

        </Grid>


        {/*segundo item, links de footer internos, redes sociales, declaracion de derechos*/}
        <Grid item xs={4} container direction='column' spacing={2} alignItems='center'>

          <Grid item xs>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Grid>

          <Grid item xs>
            <LinkedInIcon></LinkedInIcon> <InstagramIcon></InstagramIcon>
          </Grid>

          <Grid item xs>
            <Typography variant='subtitle2'>@2022 El Pinche Mito. Derechos reservados.</Typography>
          </Grid>
        </Grid>

        {/*tercer item, firma*/}
        <Grid item xs={4}>
          <Grid item xs>
            <Typography variant='h1'>FIRMA</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
