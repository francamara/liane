import React from 'react'
import Navbar from '../../components/Navbar'
import LnTypo from '../LnTypo'



//TODO preguntar por orden de links, relevancia, SEO, etc



function Header() {
  return (
    //este div porque solo se devuelve un elemento padre
    <div>
      {/* div portada dibujito y nav */}
      <div id='portada' >
        <div id='topofNavbar' >
          <LnTypo > Liane Reinshagen Joho / Counselor</LnTypo>
        </div>
        <div className='navbarMobile'>
          <Navbar />
        </div>

        {/* contenedor de firma  <div id='signatureCont'>
          <img className='signatureLiane' src='/Logo-Liane.svg' />
        </div> */}



      </div>
    </div >
  )
}

export default Header
