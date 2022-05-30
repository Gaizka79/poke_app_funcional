import React from "react";
import { Link } from 'react-router-dom';
//import Link from '@mui/material/Link';
import Button from '@mui/material/Button'

const Nav = () => {
  return (
    <nav className="nav">
      <Button variant='contained' color='primary' href='/' className="nav_element">Hasiera</Button>
      <Button variant='contained' color='primary' href='/new' className="nav_element">Sortu Pokemon berria</Button>
      <Button variant='contained' color='primary' href='/pokemon/:id' className="nav_element">Xehetasunak</Button>
      <Button variant='contained' color='primary' href='/search' className="nav_element">Bilaketa</Button> 
    </nav>
  )
}

export default Nav;
/*
<Link color="inherit" to='/' className="nav_element">Home</Link>
      <Link to='/new' className="nav_element">Nuevo Pokemon</Link>
      <Link color="inherit" to='/pokemon/:id' className="nav_element">Detalles</Link>
      <Link to='/search' className="nav_element">Buscar</Link> 
*/