import React from 'react'
import './social.css'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
const Social = () => {
  return (
    <>
    <div className="prwrap" width="100%">
    <h4 className="prhead"><span className="xterm"></span><span className="Important">cd </span> /Social</h4>
    </div>
    <div className="socialwrap">
    <SocialIcon url="https://facebook.com/0rph1n" />
    <SocialIcon url="https://instagram.com/khizo_knight" />
    </div>
    </>
  )
}

export default Social