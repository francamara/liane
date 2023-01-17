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
      <Grid container
        justifyContent='flex-start'
        alignItems='center'>
        <Grid item xs={2}>
          <IconButton
            className="navbarMobileButton"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded)
            }}
          >
            <DensitySmallIcon id='burger' />
          </IconButton>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={5} sm={4}>
          <img className='logoMovilLiane' src='/LIANE-logo.png' ></img>
        </Grid>
        <Grid item xs={3} sm={4}></Grid>
      </Grid>

      <div
        className={
          isNavExpanded ? 'navbar expanded' : 'navbar'
        }
      >

        <Grid
          container direction={{ xs: 'column', md: 'row' }}
          justifyContent='center' alignItems='center'
          spacing={{ xl: 6, lg: 4, md: 2 }}
          columns={8}>
          {/*Se mapea el array con las etiquetas y rutas del navbar para generar cada link*/}
          {navLinkData.map((navLink, i) => (
            <Grid item sm='auto' key={i}>
              <Button id='myButton'
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded)
                }}>
                <Link href={navLink.ref} >
                  <LnTypo variant='h6' id='navbarText'>{navLink.item}</LnTypo>
                </Link>
              </Button>
            </Grid>
          ))}
        </Grid>


      </div>
      {/* nav menu code... */}
    </div >
  )
}
