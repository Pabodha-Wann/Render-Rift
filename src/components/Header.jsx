import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Header.css';
import { IoIosSearch } from "react-icons/io";
import { MdDarkMode , MdLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";



function Header({darkMode , setDarkMode}) {

  const [query,setquery]=useState("");
  const navigate = useNavigate();

  const handleSearch = () =>{
    if(!query.trim()) return;

    navigate(`/search?query=${encodeURIComponent(query)}`);
  }


  return (
    <nav className='navbar'>
        <div className='logo'>
            <Link to="/">Render<span>Rift</span></Link>
        </div>

       

        <div>
        <div className='search-container'>
             <input 
             type="text" 
             placeholder='Search' 
             className='search-bar'
             onChange={(e)=>setquery(e.target.value)} 
             onKeyDown={
              (e)=>{ if(e.key==="Enter") handleSearch()}
            }/>
             
            <IoIosSearch className='icon search-icon'onClick={()=>{
              if(window.innerWidth<1000){
                navigate("/search");
              }else{
                handleSearch();
              }
            }}/>

        </div>
             
         </div>


        <div className='links'>

        <Link to="/">Home</Link>
         <Link to="/fav">WishList</Link>

         <button onClick={()=>setDarkMode(!darkMode)}>
            {darkMode ? (<MdLightMode className="icon mode"/>
              ):(<MdDarkMode  className='icon mode'/>)}
             
         </button>
         
        </div>
        
    </nav>
  )
}

export default Header