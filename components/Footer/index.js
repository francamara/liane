import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LnTypo from '../LnTypo'

function Footer() {
  return (
    <div id='footer'>

      {/*contenedor del footer, con sus tres items, dos de los cuales tambien son contenedores*/}
      <Grid container direction='row' justifyContent='center' alignItems='center'>


        {/*TODO agregar tres lineas de texto que todavia no tenemos*/}
        <Grid item xs={10} sm={3} container direction='column' alignItems='center'>

          <Grid item xs>
            <img src='/Logo-Pinche-Mito-Negro.svg' alt='El Pinche Mito'></img>
          </Grid>

          <Grid item xs>
            <LnTypo variant='body2'>Enim qui cillum labore veniam quis cillum reprehenderit. Qui
              pariatur nisi tempor deserunt non anim minim deserunt anim. Ea laborum enim ea incididunt
              ullamco laboris non et Lorem anim nulla ullamco eu.</LnTypo>
          </Grid>

        </Grid>


        {/*segundo item, links de footer internos, redes sociales, declaracion de derechos*/}
        <Grid item xs={10} sm={3} container direction='column' spacing={2} alignItems='center'>

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
            <LinkedInIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <img src='/spotify-mono-icon.svg' height='24px' />
          </Grid>

          <Grid item xs>
            <LnTypo variant='subtitle2'>@2022 El Pinche Mito. Derechos reservados.</LnTypo>
          </Grid>
        </Grid>

        {/*tercer item, firma*/}
        <Grid item xs={10} sm={3} container>
          <Grid item xs>
            <img id='footerSignature' src='/Logo-Liane.svg' alt='Liane Counselor' />
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}

export default Footer
