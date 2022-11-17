import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Currency.css'

const Currency = () => {
  const [curr,setCurr]=useState([]);

// view currency
  const Currencyview=()=>{
    axios.get('https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/?date=2022-11-17')
    .then((res)=>{
      setCurr(res.data[0].currencies[40].rate)
    }).catch((err)=>console.log(err))
  }
  
  // filter usd record
  // let filtered = curr.filter(function (curr)
  // {
  //   return curr.code === "USD";
  // }, 
  // );
  // console.log(filtered); // USD object


  
  useEffect(()=>{
    Currencyview()
  },[])

  return (
    <div className='Main_currency'>
      
        
          <div className='general_currency'>
              <p className='money'>1</p>
              <p className='money_name'>$=</p>
          
          
              <p className='money'>{curr}</p>
              <p className='money_name'>ლარი</p>
          </div>
       
      
    </div>
  )
}

export default Currency