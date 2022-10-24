import "./styles.css";
import axios from "axios";
import {useState,useEffect} from "react";

export default function Tech() {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(resp=>{
        setData(resp.data);
        console.log(data)
    }).catch(e=>{

    })
   },[])

   return (
    <div
      className="App">
      <div className="card-container">
        {data.map((elem) => (
          <div className="card">
            <img src={elem.image} alt="dddfgd" />
            <div className="card-content">
              <h3>{elem.name}</h3>
              <h3>{elem.symbol}</h3>
              <h3>{elem.current_price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
