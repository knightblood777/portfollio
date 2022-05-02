import React from 'react'
import './header.css'
import avatar from '../../static/avatar.png'

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="header-wrapper">
      <a href="" className="logo-href">
      <div className="header-avatar">
          <img src={avatar} alt='avatar'  width={75} height={75}/>
        </div>
        <div className="header-side-nav">
            <span className="term">0</span>rph<span className="term">1</span>no
        </div>
        </a>
        </div>
    </header>
    </>
  )
}

export default Header