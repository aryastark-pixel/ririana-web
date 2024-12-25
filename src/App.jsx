import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import ShoePage from './ShoePage'
import Dashboard from './Components/AI/Dashboard'
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <div>
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <div className="container">
                  <Title subTitle="Our SERVICES" title="What We Offer" />
                  <Programs />
                  <About/>
                  <Title subTitle="Contact Us" title="Get in Touch" />
                  <Contact />
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/ShoePage" element={<ShoePage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
 
}

export default App


// const App = () => {

//   const [playState, setPlayState] = useState(false);

//   return (
//     <div>
//      <Navbar/>
//      <Hero/>
//      <div className="container">
//         <Title subTitle='Our SERVICES' title='What We Offer'/>
//         <Programs/>
//         <About setPlayState={setPlayState}/>
//         {/* <Title subTitle='Gallery' title='Campus Photos'/> */}
//         {/* <Campus/> */}
//         {/* <Title subTitle='Our experience' title='What Student Says'/>
//         <Testimonials/> */}
//         <Title subTitle='Contact Us' title='Get in Touch'/>
//         <Contact/>
//         <Footer/>
//      </div>
//      <VideoPlayer playState={playState} setPlayState={setPlayState} />
//     </div>
//   )
// }

// export default App