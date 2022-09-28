import { Grid, Typography } from '@mui/material'
import React from 'react'
import LnTypo from '../LnTypo'

function Header() {
  return (
    <Grid>
        <LnTypo variant="h1">
            Hello world
        </LnTypo>
    </Grid>
  )
}

export default Header