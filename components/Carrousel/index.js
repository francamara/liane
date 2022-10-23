
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'


const images = [
  <img key={1} src='/BASE-LIANE-1.jpg' id='imagesFromCarrousel' />,
  <img key={2} src='/BASE-LIANE-2.jpg' id='imagesFromCarrousel' />,
  <img key={3} src='/BASE-LIANE-3.jpg' id='imagesFromCarrousel' />,
  <img key={4} src='/BASE-LIANE-4.jpg' id='imagesFromCarrousel' />
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
