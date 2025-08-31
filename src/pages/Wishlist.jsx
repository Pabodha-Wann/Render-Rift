import React, { useState } from 'react'
import GameCard from '../components/GameCard'
import "../assets/css/Home.css"

function Wishlist({Wishlist,setWishlist}) {


  return (
    <div className='Gamelist wishlist'>
      <h1 className='title'>Your Wishlist</h1>
      <div className='card-grid'>

          {Wishlist.length > 0 ? (
            Wishlist.map((game => (
              <GameCard 
                  key={game.id}
                  {...game}
                  Wishlist={Wishlist}
                  setWishlist={setWishlist}
              />
            )))


          ):(
            <p>Your Wishlist is empty. Add some games</p>
          )}
          

      </div>
      
    </div>
  )
}

export default Wishlist