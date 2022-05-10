import React from "react";
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { pokeContext } from "../../../context/pokeContext";

function NewPokemon() {
  const { addPokemon } = useContext(pokeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //addPokemon = data;
    console.log(data);
    addPokemon(data);
    console.log(addPokemon);
  } 

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Crea tu Pokemon!!</h2>
      <label htmlFor="id">Id del Pokemon:</label>
      <input {...register('id', {required: true})} /><br/>

      <label htmlFor="name">Nombre:</label>
      <input {...register('name', {required: true, minlength: 3})} /><br/>

      <label htmlFor="image">Imagen:</label>
      <input {...register('image', {required: false})} /><br/>

      <label htmlFor="typeOne">TypeOne:</label>
      <input {...register('typeOne')} /><br/>

      <label htmlFor="typeTwo">TypeTwo:</label>
      <input {...register('typeTwo', { required: true })} /><br/>
      {errors.lastName && <p>Last name is required.</p>}
      
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
  
}

export default NewPokemon;
