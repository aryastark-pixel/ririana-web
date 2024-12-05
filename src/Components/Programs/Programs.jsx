import React from 'react'
import './Programs.css'
import app from '../../assets/app.jpg'
import ai from '../../assets/ai.jpg'
import website from '../../assets/web.jpg'
import program_icon_1 from '../../assets/phonee.png'
import program_icon_2 from '../../assets/laptop-icon.png'
import program_icon_3 from '../../assets/logo-ai.png'

const Programs = () => {
  return (
    <>
    <div className='programs'>
      <div className="program">
        <img src={app} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Android & ios</p>
        </div>
      </div>
      <div className="program">
        <img src={website} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Website Development</p>
        </div>
      </div>
      <div className="program">
        <img src={ai} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>AI</p>
        </div>
      </div>
        
    </div>
    <div>
    <p>





      
    </p>
  </div>
  </>
  )
}

export default Programs
