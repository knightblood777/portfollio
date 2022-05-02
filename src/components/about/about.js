import React from 'react'
import './about.css'
import profile from '../../static/profile.jpeg'
import abtbg from '../../static/blob.svg'

const About = () => {
  return (
      <>
    <div className='left-abt'><img src={profile} alt="profile page"/></div>
    <div className='right-abt'><p className="intro-desc">A <span className='Important'>Junior</span> full stack developer with notable experience in web app security &#128275;  , mainly focused on the <span className='Important'>back-end</span> aspect.</p></div>
    </>
  )
}

export default About