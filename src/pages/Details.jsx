import React, { useEffect, useState } from 'react'
import "../assets/css/Details.css"
import { useParams } from "react-router-dom"
import { fetchDetails } from '../RWGapi';
import Loader from '../components/Loader';
import { FaRegHeart , FaHeart } from "react-icons/fa";



function Details(props) {
  const {id} = useParams();
  const [gameDetails,setgameDetails]=useState([]);
  const [loading,setloading]=useState(true);

  const currentWishList = props.Wishlist;
  const isInWishlist = currentWishList.some(item => item.id === gameDetails.id);


  const addtowishlist = () =>{
    if(!isInWishlist){
      props.setWishlist([...currentWishList,gameDetails]);
    }

  };

   const removefromwishlist = () =>{
    const newWishList = currentWishList.filter(game => game.id !== gameDetails.id);
    props.setWishlist(newWishList);

  }


  useEffect(()=>{
    const getResult = async()=>{
      const data = await fetchDetails(id);
      setgameDetails(data);
      setloading(false);
    }

    getResult();
   //console.log(gameDetails);

  },[id])



  return (
   <>

   {loading ? (<Loader/>) : (
        <div className='detail-page'>
          <div className='content-wrapper'>
              <div className='detail-background' style={{
                  backgroundImage: `url(${gameDetails.background_image_additional})`,      
              }}>
          </div>

      
            <div className='content'>

            <div className='banner'>
                <img src={gameDetails.background_image} alt="" />
                <h1 className="title">{gameDetails.name}
                {isInWishlist ? (
                                 <button onClick={(e)=>{
                                e.preventDefault();
                                removefromwishlist();
                              }}><FaHeart className='icon2'/></button>
                
                              ) : (
                                 <button onClick={(e)=>{
                                e.preventDefault();
                                addtowishlist();
                              }}><FaRegHeart className='icon2' /></button>
                
                              )}</h1>
            </div>

            

            <div className='more-detail'>
                <p><strong>Game Released: </strong>{gameDetails.released}</p>
                <p><strong>Rating: </strong>{gameDetails.rating}</p>
                {
                  gameDetails.genres && (<p><strong>Genres:</strong> {gameDetails.genres.map(g => g.name).join(", ")}</p>)
                }

              {
                gameDetails.parent_platforms && (
                  <div className='tags'>
                  <strong>Platforms: </strong> 
                  {gameDetails.parent_platforms.map(g => 
                    <p className='tag'>{g.platform.name}</p>
                  )}
                  </div>
                )
              }

              {gameDetails.developers && (
                  <p><strong>Developers:</strong> {gameDetails.developers.map(dev => dev.name).join(", ")}</p>
              )}
              {gameDetails.publishers && (
                  <p><strong>Publishers:</strong> {gameDetails.publishers.map(pub => pub.name).join(", ")}</p>
              )}
                  
            </div>


            <div className='more-detail2'>
              {
                gameDetails.parent_platforms && (
                  <div className='tags stores'>
                  <strong>Available on:</strong> 
                  {gameDetails.stores.map(g => 
                      <a href={`https://${g.store.domain}`} target='_blank'><p className='tag store'>{g.store.name}</p></a> 
                  )}
                  </div>
                )
              }


              {
                gameDetails.parent_platforms && (
                  <p><strong>Tags: </strong> {gameDetails.tags.map(g => g.name).join(", ")}</p>
                )
              }
            </div>
          </div>
      </div>


      <div className='gamedesc'>
            <p className="description">{gameDetails.description_raw}</p>
      </div>

      <div className='gameImages'>
        {gameDetails.developers && gameDetails.developers.map(game=>
           <img src={game.image_background} alt=""/>
        )}
      </div>

    </div>
   )}
   </>


  )
}

export default Details