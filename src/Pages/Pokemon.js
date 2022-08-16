import { useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";

const Pokemon = () => {
  let name = useParams();

  const fetchPokemon = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name.name)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }); // Add Dependancies

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]); // Add Dependancies

  return (
    <div className="poke-card">
      <h1>Pokemon</h1>
      <h2>{name.name}</h2>
    </div>
  );
};

export default Pokemon;
