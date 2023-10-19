import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Navbar(props) {
  return (
    <>
    <div className="nav-container">
      <div className='nav'>
        <div className='title' ><a href='/'>{props.Title}</a></div>

          <ul className='ulleft'>
            <li className='li' ><a href='/'>{props.HomeNavText}</a></li>
            <li className='li' ><a href='/'>{props.aboutNavText}</a></li>
          </ul>
          <ul className="ulright">
            <li className="li"><a><input type="text"  className="searchbar" placeholder='search' /></a></li>
            <li className="li"><img src="./searchimg.png"  height= "35px" width= "35px"/></li>
            
            </ul>
        </div>
    </div>
    </>
   
  )
}

Navbar.proptype={
    Title: PropTypes.string.isRequired,
    aboutNavText: PropTypes.string.isRequired,
    HomeNavText: PropTypes.string.isRequired

}
Navbar.defaultProps={
    Title:"Textutils",
    aboutNavText:'Aboutus',
    HomeNavText:"Home"

}