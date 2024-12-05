import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Ririana Innovations</h1>
        <p>We got your technical needs covered!</p>
        
        <Link to= 'contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link>
        
        {/* <button className='btn'>Contact us <img src={dark_arrow} alt="" /></button> */}
      </div>
    </div>
  )
}

export default Hero
