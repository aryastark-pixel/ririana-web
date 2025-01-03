import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logoriana.jpg'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import ShoePage from '../../ShoePage';
import { Link as RouterLink} from 'react-router-dom';


const handleOpenNewTab = () => {
  window.open('/#/ShoePage', '_blank');
};
const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <h2>Ririana Innovations</h2>
      {/* <img src={logo} alt="" className='logo' /> */}
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        {/* <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li> */}
        {/* <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li> */}
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        {/* <li><Link to='/shoeViewer' target="_blank" smooth={true} duration={500}>Demo</Link></li> */}
        {/* <button onClick={handleOpenNewTab}>Shoe Page</button> */}
        <li><RouterLink to="/ShoePage">3d Model</RouterLink></li> 
        <li><RouterLink to="/Dashboard">AI</RouterLink></li>    
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
