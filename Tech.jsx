import React from 'react'
import axios from 'axios'
import { useState } from 'react';
//import data from '../UserPage/Mock/Data';
import './Lor.css'
import { useEffect } from 'react';

const User = () => {
    const [datai,setDatai]=useState([])
    
var accept=[]

    
    
   // const data=axios.get(url);

       useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(resp=>{
            setDatai(resp.data);
            console.log(datai)
        }).catch(e=>{

        })
       },[]) 

/*     data.then(promiseData=>{
        setData({
            id:promiseData.data[0].id,
            name:promiseData.data[0].name,
            current_price:promiseData.data[0].current_price,
            symbol:promiseData.data[0].symbol,
            image:promiseData.data[0].image,
        })
        accept.push(promiseData)
        console.log(promiseData.data)
        )} */

    
    
    
    

  
  return (
    <div style={{"minHeight":"100vh","width":"100%","display":"flex","justifyContent":"center" ,"alignItems":"center"}}>
        <div className='prac-main'>

        
       {/*  <button style={{"height":"40px","width":"100px"}} onClick={getData}>
    Get
        </button> */}
        
        {datai.map(elem=>(
            <div className='praccss' style={{"backgroundImage":`url(${elem.image})`}}>
            <h3>{elem.name}</h3>
            <h3>{elem.symbol}</h3>
            {/* <h3>{elem.}</h3> */}

            </div>
        ))}
        </div>
    </div>
  )
}

export default User
