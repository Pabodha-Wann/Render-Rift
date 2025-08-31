import React from 'react'
import "../assets/css/Footer.css"
import  logo from "../assets/rawg.png";


function Footer() {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="logo">
                <img src={logo} alt="RAWG Logo" width={"50rem"}/>
                <p>Powered by RAWG Video Games Database</p>
            </div>

        <div className="footer-links">
          <a href="https://rawg.io" target="_blank" rel="noreferrer">RAWG Website</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        
        <div className="footer-socials">
          <p className='text-contact'>Conatct Me:</p>
          <a href="https://github.com/Pabodha-Wann" target="_blank" rel="noreferrer">Github</a>
          <a href="www.linkedin.com/in/pabodha-wanniarachchi-a0533a314" target="_blank" rel="noreferrer">Linkedin</a>
          <a href="mailto:pabodhawanniarachchi@gmail.com" target="_blank" rel="noreferrer">Gmail</a>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Game Explorer. All rights reserved.</p>
      </div>

    </div>


    
  )
}

export default Footer