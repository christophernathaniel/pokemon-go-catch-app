import { useState, useEffect, useCallback } from "react";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [totalPages, setTotalpages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [queryParams, setQueryParams] = useState("");

  // Request to fetch Pokemon
  // useCallback to memorize callback function
  // Only run the request once
  const fetchPokemon = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        setPokeList(data.results);
        console.log(data);

        if (totalPages === null) {
          console.log(data.count);
          setTotalpages(data.count);
        }
      });
  }, []);

  // On List Change fetch new Pokemon List
  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]); // Only Target new Pokemon List on List Change

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <ul className="results">
        {pokeList.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
