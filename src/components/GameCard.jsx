import React, { useState } from 'react'
import "../assets/css/gameCard.css"
import { Link } from 'react-router-dom'
import { FaRegHeart , FaHeart } from "react-icons/fa";


function GameCard(props) {

  //props - the game want to add
  //here currentWishList - means existing system
  //Check if game already in wishlist
  const currentWishList = props.Wishlist;
  const isInWishlist = currentWishList.some(item => item.id === props.id);


  const addtowishlist = () =>{
    if(!isInWishlist){
      props.setWishlist([...currentWishList,props]);
    }

  };


  const removefromwishlist = () =>{
    const newWishList = currentWishList.filter(game => game.id !== props.id);
    props.setWishlist(newWishList);

  }

  return (

    <Link to={`/detail/${props.id}`}>
        <div className='gameCard'>
        <div className='img-container'>
          <img src={props.background_image} alt="" />
        </div>

        <div className='desc'> 
          <h2 className='title'>{props.name}</h2>
          

          <div className='platforms'>
            {props.parent_platforms.map((platform)=>{
                return <p className='platform'>{platform.platform.name}</p>
            })}
              
              
          </div>
          
          <div className='desc2'>


              {isInWishlist ? (
                 <button onClick={(e)=>{
                e.preventDefault();
                removefromwishlist();
              }}><FaHeart className='icon'/></button>

              ) : (
                 <button onClick={(e)=>{
                e.preventDefault();
                addtowishlist();
              }}><FaRegHeart className='icon' /></button>

              )}

             
              <p className='rating'>{props.rating}</p>
              
          </div>
          
        </div>
    </div>
    </Link>
    
  )
}

export default GameCard