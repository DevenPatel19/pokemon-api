import axios from "axios";
import React, { useState } from "react";

const Pokemon = (props) => {

  const [pokemonList, setPokemonList] = useState([])

  const getPokemon = () => {

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response=>{ 
      setPokemonList(res.data.results);
    })
    .catch(err => console.log(err))
  };
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    // .then((response) => {return response.json();})
    // .then((response) => {setPokemonList(response.results);})
    // .catch((err) => {
    //   console.log(err);
    // });

  }

  return (
    <div className="container text-center mt-5">
      <button className="btn btn-lg btn-success" onClick={getPokemon}>
        Fetch Pokemon
      </button>
      <ul className="mt-5 list-unstyled">
        {pokemonList.length > 0 && 
        pokemonList.map((pokemon,index) => {
          return <li key={index}>{index+1}-{pokemon.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Pokemon