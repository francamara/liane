import React, { useState, useEffect } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'

const scrollStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 40,
  left: 'auto',
  position: 'fixed',
}

const ScrollToTop = ({
  showBelow,
}) => {

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window['scrollTo']({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div>
      {show &&
        <Fab color='neutral' sx={scrollStyle} >
          <IconButton onClick={handleClick} aria-label="to top" component="span">
            <ExpandLessIcon />
          </IconButton>
        </Fab>
      }
    </div>
  )
}
export default ScrollToTop
