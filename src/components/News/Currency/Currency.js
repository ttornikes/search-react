import React from 'react'
import './Currency.css'
const Currency = () => {
  return (
    <div className='Main_currency'>
        <div className='general_currency'>
            <p className='money'>gel =</p>
            <p className='money_name'>1₾</p>
        </div>
        <div className='second_currency'>
            <p className='money'>usd =</p>
            <p className='money_name'>2.70$</p>
        </div>
    </div>
  )
}

export default Currency