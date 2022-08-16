import { useState, useEffect, useCallback } from "react";

function App() {
  const [pokeList, setPokeList] = useState([]);

  // Request to fetch Pokemon
  // useCallback to memorize callback function
  // Only run the request once
  const fetchPokemon = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        setPokeList(data);
      });
  }, []);

  // On List Change fetch new Pokemon List
  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]); // Only Target new Pokemon List on List Change

  return <div className="App"></div>;
}

export default App;
