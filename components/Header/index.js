import { Button } from '@mui/material'
import React from 'react'
import LnTypo from '../LnTypo'


function Header() {
  return (
    //define altura del componente entero
    <div style={{ height: '100vh' }}  >
      <div id='portada' >


        <div id='navbar'>

          <Button id='myButton'> <LnTypo variant='button'>Inicio</LnTypo></Button>
          <Button id='myButton' > <LnTypo variant='button'>¿Quién Soy?</LnTypo></Button>
          <Button id='myButton'> <LnTypo variant='button'>¿Qué es counselling?</LnTypo></Button>
          <Button id='myButton'> <LnTypo variant='button'>¿Cómo puedo ayudarte?</LnTypo></Button>
          <Button id='myButton'> <LnTypo variant='button'>El Pinche Mito</LnTypo></Button>
          <Button id='myButton'> <LnTypo variant='button'>Contáctame</LnTypo></Button>


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
        <LnTypo> Un podcast para no fundamentalistas</LnTypo>
      </div>
    </div>
  )
}

export default Header
