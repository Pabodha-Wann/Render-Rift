import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import "../assets/css/Header.css"
import "../assets/css/Search.css"
import GameCard from "../components/GameCard"
import { fetchsearch } from '../RWGapi';
import { IoIosSearch } from "react-icons/io";
import Loader from '../components/Loader'

function Search({Wishlist,setWishlist}) {

  const [results,setresults]=useState([]);
  const [loading,setloading]=useState(true);
  const [search,setsearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  //Get query from navigated URL
  const query = new URLSearchParams(location.search).get("query");


  useEffect(()=>{
    const getresult = async()=>{
      const data = await fetchsearch(query);
      setresults(data.results);
      setloading(false);
    };

    getresult();
    
  },[query]);

  

  const handleSearch = () =>{
    navigate(`/search?query=${encodeURIComponent(search)}`);

  }

  

  return (
     <>

      <div className='search-page' style={{"margin-top":"5rem"}}>

          {!query && <div className='search-container-mobile'>
                      <input 
                      type="text" 
                      placeholder='Search' 
                      className='search-mobile'
                      onChange={(e)=>setsearch(e.target.value)} 
                      onKeyDown={
                        (e)=>{if(e.key==="Enter"){
                            handleSearch();
                        }}
                      }/>
                      
                      <IoIosSearch className='icon search-icon'onClick={handleSearch}/>
                      
          
          </div>}
          
          <div className='Gamelist'>
          <h1 className='title'>Search For: {query}</h1>
          <div className='card-grid'>

          {loading ? (<Loader/>) :
              results.length > 0 ? (
              results.map((game)=>
            {
              return <GameCard key={game.id} {...game} Wishlist={Wishlist} setWishlist={setWishlist}/>
            })
          ):(
            <p>No results Found</p>
          )}
          
          </div>
          
      </div>
     </div>
       
    </>
  )
}

export default Search