import React from 'react'
import './Input.css'
const Input = () => {
  return (
    <div className='Main_input'>
        <form className='input_form'>
            <div className='input_wraper'>
                <input className='input' type='text' placeholder='search...' />
            </div>
        </form>
    </div>
  )
}

export default Input