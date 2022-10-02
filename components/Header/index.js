import { Button } from '@mui/material'
import React from 'react'

function Header() {
  return (
    //define altura del componente entero
    <div style={{ height: '100vh' }}>
      <div id='portada' >
        <div id='navbar'>
          <Button variant='text'> Inicio</Button>
        </div>
      </div>
      <div id='bannerPodcast'> Firma Liane
        {/*TODO meter grid container direction row para organizar los elementos del banner*/}
      </div>
    </div>
  )
}

export default Header
