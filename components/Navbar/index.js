import React from 'react'
import { useState } from 'react'
import DensitySmallIcon from '@mui/icons-material/DensitySmall'
import { IconButton, Button, Grid } from '@mui/material/'
import Link from 'next/link'
import LnTypo from '../LnTypo'




const navLinkData = [
  { item: 'Home', ref: '/', className: 'home' },
  { item: '¿Qué es counseling?', ref: '#counseling' },
  { item: '¿Quién soy?', ref: '#aboutme' },
  { item: '¿Cómo puedo ayudarte?', ref: '#ayudarte' },
  { item: 'El Pinche Mito', ref: '#elPincheMito' },
  { item: 'FAQ', ref: '#faq' },
  { item: 'BLOG', ref: '/' },
  { item: 'Contáctame', ref: '#footer' }
]




export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div className="nav">
      <IconButton
        className="navbarMobileButton"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <DensitySmallIcon />
      </IconButton>
      <img className='logoMovilLiane' src='/LIANE-logo.png' ></img>

      <div
        className={
          isNavExpanded ? 'navbar expanded' : 'navbar'
        }
      >

        <Grid container direction={{ xs: 'column', sm: 'row' }} justifyContent='center' alignItems='center' spacing={{ xs: '0', sm: '24' }}>
          {/*Se mapea el array con las etiquetas y rutas del navbar para generar cada link*/}
          {navLinkData.map((navLink, i) => (
            <Grid item sm='auto' key={i}>
              <Button id='myButton'>
                <Link href={navLink.ref} >
                  <LnTypo variant='h6' id='navbarText'>{navLink.item}</LnTypo>
                </Link>
              </Button>
            </Grid>
          ))}
        </Grid>


      </div>
      {/* nav menu code... */}
    </div>
  )
}
