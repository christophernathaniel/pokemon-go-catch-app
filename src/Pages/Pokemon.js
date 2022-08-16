import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const Pokemon = () => {
  let name = useParams();

  let defaultPokeState = {
    image: "",
    id: null,
    speed: "",
    shiny: false,
    hp: 0,
    defence: 0,
    attack: 0,
    specialDefence: 0,
    specialAttack: 0,
    weight: 0,
    types: [],
  };

  const [pokeStat, setPokeStat] = useState(defaultPokeState);

  const fetchPokemon = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name.name)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPokeStat = [...pokeStat, data.sprites.front_default];
      });
  }); // Add Dependancies

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]); // Add Dependancies

  return (
    <div className="poke-card">
      <h1>Pokemon</h1>
      <h2>{name.name}</h2>
      <img src="{pokeStat.image}" />
    </div>
  );
};

export default Pokemon;
