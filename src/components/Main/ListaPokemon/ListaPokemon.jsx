import React, { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios"; //No funciona, rompo las normas de los hooks, no se por qué....
import axios from 'axios';
import PokemonCard from './Card';
import { useDebouncedCallback } from 'use-debounce';
import { useContext } from "react";
import { pokeContext } from "../../../context/pokeContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import uuid4 from "uuid4"; ---> solamente con importarlo, me da error.

function ListaPokemon ()  {
//const ListaPokemon = () => {
  
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const { addPokemon } = useContext(pokeContext);
  const { pokems } = useContext(pokeContext);

  const debounced = useDebouncedCallback((value) => {
      setInput(value.target.value.toLowerCase());
      value.target.value = "";
  },3000);

  useEffect(() => {
    if (input) {
      const getApi = async () => {
        try{
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
          //const res = useAxios(`https://pokeapi.co/api/v2/pokemon/${input}`)
          const result = await res.data;
          setPokemon([result, ...pokemon]);
          addPokemon(result);
        }catch(error) {
          if (error.code === 'ERR_BAD_REQUEST') {
            console.log("Pokemon no econtrado!!!");
          }
          throw error;
        }
      }
      getApi();
    }
  },[input]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(event.target.pokemon.value.toLowerCase());
    event.target.pokemon.value = '';
  }

  return (
    <section className="listapokemon">
      <form onSubmit={handleSubmit} className='formPokemon'>
        <TextField id='outlined-basic' type="text" onChange={(e) => 
          debounced(e)} name="pokemon" placeholder="Nombre o número de Pokemon..." />
      </form>
      <div className="padrePokemon">
        {pokems === [] ? ""
        : pokems.map((poke, i) => <PokemonCard key={i} value={poke} />)
        }
      </div>
    </section>
  )
}

export default ListaPokemon;
//<label htmlFor="pokemon">Introduce un Pokemon: </label><br /><br />
//<button onClick={()=> console.log(input)}>ver input</button>
//<Button type="submit" variant='contained' color='primary'>Buscar Pokemon</Button>
/*
<label htmlFor="pokemon">Introduce un Pokemon: </label><br /><br />
          <input type="text" name="pokemon" id='pokemon' />
          <Button type="submit" variant='contained' color='primary'>Buscar Pokemon</Button>
*/