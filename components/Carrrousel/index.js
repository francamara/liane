
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'


const images = [
  <img key={1} src='/BASE-LIANE-1.jpg' />,
  <img key={2} src='/BASE-LIANE-2.jpg' />
]

function ImageSlider() {

  return (
    <Carousel className='sliderImage'>
      {
        images.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  return (
    <Paper >
      <div>{props.item} </div>
    </Paper>

  )
}

export default ImageSlider
