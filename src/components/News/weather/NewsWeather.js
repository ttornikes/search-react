import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './NewsWeather.css'
const NewsWeather = () => {
  const [temp,setTemp]=useState([]);
  const [city,setCity]=useState([]);
  
  // const [chosecurr,setChosecurr]=useState([]);
  // api key
  const API_key='91eedb57aa381cf18be4404108e0d6ce';
  
  // find tem and location
  const callTemp= ()=>{
    navigator.geolocation.getCurrentPosition(position =>{
      const lat=position.coords.latitude;
      const lon =position.coords.longitude;
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)
    .then((res) => {
      setTemp(res.data.main.temp)
      setCity(res.data.name)
      
    }).catch((err) => {
      console.log(err)
    });
    });
  }

  



  useEffect(()=>{
   return (
    callTemp()
    )
    
  },[]);
  
  
  return (
    <div className='Main_newsweather'>
        <div className='newsweather'>
            <div className='newsweather_wrapper'>
                <img src='image/sun.svg' alt='weather icon'/>
                <p  className='newsweather_temp'>{Math.round(temp - 273.15)}</p>
            </div>

            <div className='newsweather_wrapper'>
                <img src='image/location.svg' alt='location icon'/>
                <p  className='newsweather_loc'>{city}</p>
            </div>
        </div>
    </div>
  )
}

export default NewsWeather