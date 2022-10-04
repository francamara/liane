import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import LnTypo from '../LnTypo'

function Footer() {
  return (
    //TODO hacer que todo funque con grid y usar xs y sm para hacer todo responsive
    <div id='footer' style={{ height: '30vh', backgroundColor: '#F4F0DB', display: 'flex', alignItems: 'center' }}>

      {/*contenedor del footer, con sus tres items, dos de los cuales tambien son contenedores*/}
      <Grid container direction='row' justifyContent='space-around'>


        {/*el primer item, logo y tres lineas de texto que todavia no tenemos TODO*/}
        <Grid item xs={4} container direction='column' spacing={2} alignItems='center'>

          <Grid item xs>
            <LnTypo variant='h2'>LOGO</LnTypo>
          </Grid>

          <Grid item xs>
            <LnTypo variant='body2'>Enim qui cillum labore veniam quis cillum reprehenderit.</LnTypo>
            <LnTypo variant='body2'>Qui pariatur nisi tempor deserunt non anim minim deserunt anim.</LnTypo>
            <LnTypo variant='body2'>Ea laborum enim ea incididunt ullamco laboris non et Lorem anim nulla ullamco eu.</LnTypo>
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
            <Link href="mailto:maildeliane@provider.sfx">
              <a>Escríbeme</a>
            </Link>
          </Grid>

          <Grid item xs>
            <LinkedInIcon></LinkedInIcon> <InstagramIcon></InstagramIcon>
          </Grid>

          <Grid item xs>
            <LnTypo variant='subtitle2'>@2022 El Pinche Mito. Derechos reservados.</LnTypo>
          </Grid>
        </Grid>

        {/*tercer item, firma*/}
        <Grid item xs={4}>
          <Grid item xs>
            <LnTypo variant='h1'>FIRMA</LnTypo>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
