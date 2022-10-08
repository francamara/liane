import { Grid } from '@mui/material'
import React from 'react'
import LnTypo from '../LnTypo'

function Mensaje() {
  return (
    //TODO hacer que el mensaje y posiblemente la foto se levanten dinamicamente, futuramente modificable por superuser
    <div id='mensaje'>
      {/*contenedor del Mensaje*/}
      <Grid container justifyContent='center' spacing={6} marginY={4}>

        {/*foto asociada a mensaje*/}
        <Grid item xs={10} sm={3} container justifyContent='center' alignItems='center'>
          <LnTypo variant='h1'>
            FOTO
          </LnTypo>
        </Grid>

        {/*texto mensaje*/}
        <Grid item xs={10} sm={6}>
          <LnTypo variant='body1' className='seText' mb={4}>
            Elit culpa sit ea nisi aliqua proident. Occaecat dolor laborum incididunt eu nostrud
            deserunt irure occaecat magna exercitation duis.Ullamco duis consectetur voluptate
            sunt deserunt nisi nostrud consectetur dolor.Irure irure ut officia dolore id pariatur
            excepteur nostrud voluptate qui. Proident duis ut reprehenderit pariatur ullamco qui
            occaecat do aute non anim. Esse nostrud incididunt adipisicing est sunt excepteur
            consectetur. Magna quis excepteur consectetur labore dolore ea elit Lorem ut ex.
            Magna aliquip duis ea fugiat. Enim exercitation ad irure ipsum Lorem eiusmod duis
            sunt. Voluptate dolore excepteur sit consectetur tempor sit eu dolor commodo. Veniam
            laborum labore qui sint mollit aliqua. Excepteur cupidatat veniam anim non anim irure
            tempor. Occaecat do duis elit aliquip nulla cupidatat nisi aliquip sunt.
          </LnTypo>

          <LnTypo variant='body1' className='seText' mb={4}>
            Elit culpa sit ea nisi aliqua proident. Occaecat dolor laborum incididunt eu nostrud
            deserunt irure occaecat magna exercitation duis.Ullamco duis consectetur voluptate
            sunt deserunt nisi nostrud consectetur dolor.Irure irure ut officia dolore id pariatur
            excepteur nostrud voluptate qui. Proident duis ut reprehenderit pariatur ullamco qui
            occaecat do aute non anim. Esse nostrud incididunt adipisicing est sunt excepteur
            consectetur. Magna quis excepteur consectetur labore dolore ea elit Lorem ut ex.
            Magna aliquip duis ea fugiat. Enim exercitation ad irure ipsum Lorem eiusmod duis
            sunt. Voluptate dolore excepteur sit consectetur tempor sit eu dolor commodo. Veniam
            laborum labore qui sint mollit aliqua. Excepteur cupidatat veniam anim non anim irure
            tempor. Occaecat do duis elit aliquip nulla cupidatat nisi aliquip sunt.
          </LnTypo>
        </Grid>
      </Grid>
    </div >
  )
}

export default Mensaje
