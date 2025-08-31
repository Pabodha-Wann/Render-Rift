import React, { useEffect, useState } from 'react'
import "../assets/css/Banner.css"
import { CiStar } from "react-icons/ci";
import { fetchBanner } from '../RWGapi';
function Banner() {

  const [bannerGame,setbannerGame]=useState([]);


  useEffect(()=>{

    const getBanner=async()=>{
        const data = await fetchBanner();
        setbannerGame(data);
    }

    getBanner();

    
  },[]);

  return (
    <div className="banner">
      <img src={bannerGame.background_image} alt={bannerGame.name} className="banner-img"/>

      <div className="banner-overlay">
        <h1>{bannerGame.name}</h1>
        <p><CiStar style={{"width":"2rem", "height":"1.5rem"}} className='star' />{bannerGame.rating} / 5</p>

        <a href={`/detail/${bannerGame.id}`}><button>View Details</button></a>
        
      </div>
    </div>
  )
}

export default Banner