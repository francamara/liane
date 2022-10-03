import { Button } from '@mui/material'
import React from 'react'

import Hero from '../Hero'

function Header() {
  return (
    //define altura del componente entero
    <div style={{ height: '100vh' }}>
      <div id='portada' >


        <div id='navbar'>

          <Button id='myButton'> Inicio</Button>
          <Button path='/' elemnt={<Hero />} id='myButton' >¿Quien Soy?</Button>
          <Button id='myButton'>¿Que es counselling?</Button>
          <Button id='myButton'>¿Cómo puedo ayudarte?</Button>
          <Button id='myButton'>El Pinche Mito</Button>
          <Button id='myButton'>Contactamé</Button>


        </div>

      </div>
      <div id='bannerPodcast'> Firma Liane
        {/*TODO meter grid container direction row para organizar los elementos del banner*/}
      </div>
    </div>
  )
}

export default Header
