import React from "react";
import logo from '../../assets/pokemon.png';
import Nav from './Nav/Nav';


const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="imagen pikachu" className="imagen" />
       <Nav/> 
    </div>
  )
}

export default Header;