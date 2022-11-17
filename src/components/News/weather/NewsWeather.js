import React from 'react'
import './NewsWeather.css'
const NewsWeather = () => {
  return (
    <div className='Main_newsweather'>
        <div className='newsweather'>
            <div className='newsweather_wrapper'>
                <img src='image/sun.svg' alt='weather icon'/>
                <p className='newsweather_temp'>17</p>
            </div>

            <div className='newsweather_wrapper'>
                <img src='image/location.svg' alt='location icon'/>
                <p className='newsweather_loc'>tbilisi</p>
            </div>
        </div>
    </div>
  )
}

export default NewsWeather