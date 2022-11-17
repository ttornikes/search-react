import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='Main_header'>
        <div className='header-menu'>
            <img src="image/menu.svg" alt="burger menu" />
        </div>
        <div className='header_logo'>
            <img src="image/weather-news.svg" alt="logo" />
        </div>
        <div className='weather icon'>
            <img src="image/sun.svg" alt="sun" />
            <img src="image/rainy.svg" alt="rain" />
        </div>

    </div>
  )
}

export default Header