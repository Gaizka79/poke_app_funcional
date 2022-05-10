import React from "react";
import { Routes, Route } from 'react-router-dom';

import ListaPokemon from './ListaPokemon';
import PokemonCard from './ListaPokemon/Card';
import NewPokemon from './New';
import Search from './Search';
import Detalles from './ListaPokemon/Detalles';

function Main () {
  return (
    <main>
      <div>
        <Routes>
          <Route element={<ListaPokemon/>} path='/' />
          <Route element={<PokemonCard/>} path='/' />
          <Route element={<Detalles />} path='pokemon/:id' />
          <Route element={<NewPokemon/>} path='/new' />
          <Route element={<Search/>} path='/search' />
        </Routes>
      </div>
    </main>
  )
}

export default Main;
