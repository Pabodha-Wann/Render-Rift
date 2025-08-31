import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useEffect, useState } from 'react'

function App({children}) {

  const [darkMode,setDarkMode]=useState(true);
  // const [Wishlist,setWishlist]=useState([]);

  
    // const saved = localStorage.getItem("wishlist");
    // if(saved){
    //     const parsedSaved = JSON.parse(saved);

    //     if(Array.isArray(parsedSaved)){
    //       setWishlist(parsedSaved);
    //     }
        
    // }

  //
  const [Wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });
 

  useEffect(()=>{
      localStorage.setItem("wishlist",JSON.stringify(Wishlist));
  },[Wishlist])

  

  useEffect(()=>{

    if(darkMode){
      document.documentElement.classList.remove("lightmode");
    }else{
        document.documentElement.classList.add("lightmode");
      }
  

  },[darkMode])
 
  

  return (
    <>
      <ScrollToTop/>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/><br />
      <main>{children && React.cloneElement(children,{Wishlist,setWishlist})}</main>
      <Footer/>
    </>
  )
}

export default App
