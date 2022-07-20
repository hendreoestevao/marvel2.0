import React from 'react'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.png'
import logo3 from '../img/logo3.png'
import logo4 from '../img/logo4.png'




export const Footer = () => {
  return (
    <footer className='logo-footer' >
      <nav >
        <ul className='nav-footer' >
          <li ><p>Instagram</p> <img src={logo1} /></li>
          <li ><p>Facebook</p><img src={logo2} /></li>
          <li ><p>Whatsapp</p><img src={logo3} /></li>
          <li ><p>Github</p><img src={logo4} /></li>
        </ul>

      </nav>
            <div>
              <nav >
                <ul className='nav-footer1'>
                <li><p>Contatos</p></li>
                <li><p>Sobre</p></li>
                <li><p>Projetos</p></li>
                <li><p>Marvel</p></li>
                
                </ul>
              </nav>
              
            </div>
       
      </footer>
  
  
  )
}


export default Footer;