import React, { useEffect, useState } from 'react'
import GameCard from '../components/GameCard'
import "../assets/css/Home.css"
import Banner from '../components/Banner';
import { fetchPopularGames } from '../RAWGapi';
import Loader from '../components/Loader';


function Home({Wishlist,setWishlist}) {

const [game,setgame] = useState([]);
const [loading,setloading]=useState(true);


useEffect(()=>{
  const getpopular = async()=>{
    const data = await fetchPopularGames();
    setgame(data);
    setloading(false);
  }
  getpopular();
  
  
},[])


  return (
    <>
        {loading ? (<Loader/>) : (
          <div>
              <Banner/>
              <div className='Gamelist'>
              <h1 className='title'>Popular Games</h1>
                <div className='card-grid'>

                    {game && game.map((game)=>
                    {
                      return (
                      
                          <GameCard key={game.id} {...game} Wishlist={Wishlist} setWishlist={setWishlist}/>
                      
                    )
                    })}

                
                </div>
              
              </div>
          </div>
        )}

    </>
  
  )
}

export default Home
