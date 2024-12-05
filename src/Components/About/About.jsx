import React from 'react'
import './About.css'
import about_img from '../../assets/logoriana.jpg'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/> */}
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Ririana Innovations</h2>
        <p>We specialize in providing reliable, innovative, and scalable tech solutions to meet your business needs. We offer a full range of services, from ios, android development to web development and AI.</p>
        <p>Our team of experts works closely with you to deliver customized, efficient solutions that drive success and keep your business ahead of the curve. Whether you’re a startup or an enterprise, we’re here to handle your technology, so you can focus on what matters most.</p>
       
        <p>Sit back and relax, because we got your technical needs covered!</p>
        <p></p><p></p><p></p><p></p>
      </div>
    </div>
  )
}

export default About
