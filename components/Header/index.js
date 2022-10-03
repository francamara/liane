import { Button, Typography } from '@mui/material'
import React from 'react'


function Header() {
  return (
    //define altura del componente entero
    <div style={{ height: '100vh' }}  >
      <div id='portada' >


        <div id='navbar'>

          <Button id='myButton'> Inicio</Button>
          <Button id='myButton' >¿Quien Soy?</Button>
          <Button id='myButton'>¿Que es counselling?</Button>
          <Button id='myButton'>¿Cómo puedo ayudarte?</Button>
          <Button id='myButton'>El Pinche Mito</Button>
          <Button id='myButton'>Contactamé</Button>


        </div>
        <div>
          <img id='signatureLiane' src='/LOGO-LIANE.svg'></img>
        </div>
      </div>
      <div id='bannerPodcast'>
        <img src='' alt='fotoparaelpodcast'></img>
        <img id='bannerPodcastLogo' src='/Logo-para-banner-podcast.svg'>
          {/*TODO meter grid container direction row para organizar los elementos del banner*/}
        </img>
        <Typography> Un podcast para no fundamentalistas</Typography>
      </div>
    </div>
  )
}

export default Header
