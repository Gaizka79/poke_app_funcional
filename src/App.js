import React from 'react';
import './styles/styles.scss';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { pokeContext } from './context/pokeContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [pokems, setPokems] = useState([]);

  const addPokemon = (berria) => {
    setPokems([berria, ...pokems])
  }

  const datuak = {
    addPokemon,
    pokems
  }

  return (
    <div className="App">
        <BrowserRouter>
          <pokeContext.Provider value={datuak}>
            <Header/>
            <Main/>
          </pokeContext.Provider>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;