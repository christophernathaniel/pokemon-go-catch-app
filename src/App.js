import { useState, useEffect, useCallback } from "react";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [totalPages, setTotalpages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [queryParams, setQueryParams] = useState("?limit=20&offset=0");

  // Request to fetch Pokemon
  // useCallback to memorize callback function
  // Only run the request once
  const fetchPokemon = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + queryParams)
      .then((res) => res.json())
      .then((data) => {
        setPokeList(data.results);
        console.log(data);

        if (totalPages === null) {
          console.log(data.count);
          console.log("hello");
          setTotalpages(data.count);
        }
      });
  }, [totalPages, queryParams]); // Add Dependancies

  // On List Change fetch new Pokemon List
  // Depricated for Removal: Redundent Function
  // useEffect(() => {
  //   fetchPokemon();
  // }, [fetchPokemon]); // Only Target new Pokemon List on List Change

  // On Page Value Change query selector
  useEffect(() => {
    let resultOffset = currentPage * 20;
    setQueryParams("?limit=20&offset=" + resultOffset);
    fetchPokemon();
  }, [currentPage, fetchPokemon, queryParams]);

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <ul className="results">
        {pokeList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      {currentPage < totalPages && (
        <button
          className="show-more"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default App;
