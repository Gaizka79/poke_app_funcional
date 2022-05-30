import React from "react";
import pokeBall from '../../assets/pokeball.png';
import logo from '../../assets/pokemon.png';
import Nav from './Nav/Nav';


const Header = () => {
  return (
    <header className="header">
      <div className="divHeader">
        <img src={pokeBall} alt="PokeBall" className="pokeBall"/>
        <img src={logo} alt="imagen pikachu" className="pokeLogo" />
      </div>
      <Nav/> 
    </header>
  )
}

export default Header;