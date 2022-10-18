import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export const carrouselData = [
  {
    image: '/BASE-LIANE-1.jpg'
  },
  {
    image: '/BASE-LIANE-2.jpg'
  },
  {
    image: '/BASE-LIANE-3.jpg'
  }
]

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length


  const nextSlide = () => {
    setCurrent(current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }





  return (
    <div className="slider">
      <ArrowBackIosIcon className="leftArrow" onClick={prevSlide} />
      <ArrowForwardIosIcon className="rightArrow" onClick={nextSlide} />

      {carrouselData.map((slide, george) => {
        return (
          <div
            className={george === current ? 'slide active' : 'slide'} key={george}>
            {george === current && (<img src={slide.image} alt='imagenes' className="sliderImage" />
            )}


          </div>

        )


      })}
    </div>
  )
}

export default ImageSlider
