import { Typography } from '@mui/material'
import React from 'react'

function LnTypo(props) {
  return (
    <Typography {...props} align='justify'>
      {props.children}
    </Typography>
  )
}

export default LnTypo
