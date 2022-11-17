import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import Input from './components/input/Input'
import Currency from './components/News/Currency/Currency'
import NewsWeather from './components/News/weather/NewsWeather'
const App = () => {
  return (
    <div className='main_page'>
      <Header/>
      <Input/>
      <Currency/>
      <NewsWeather/>
    </div>
  )
}

export default App