import { useState, useEffect, useCallback } from "react";
import PokeItem from "./Component/PokeItem";
import PokeSearch from "./Component/PokeSearch";
import Pagination from "./Atom/Pagination";

function App() {
  const [pokeList, setPokeList] = useState([]); // Current Pokemon Character List
  const [currentPage, setCurrentPage] = useState(0); // Current Page Number
  const [queryParams, setQueryParams] = useState("?limit=20&offset=0"); // Query Params
  const [totalResults, setTotalResults] = useState(null); // Total Result Count
  const [pokeSearchValue, onPokeSearchValue] = useState(""); // Search Value

  // Note: the API doesn't return a search API. We have two options.
  // To Cache the result OR to use full-term search
  const fetchPokeSearch = useCallback(
    (e) => {
      pokeSearchValue !== "" && setQueryParams(`/${pokeSearchValue}`);
    },
    [setQueryParams, currentPage, pokeSearchValue]
  );

  // useEffect(() => {
  //   fetchPokeSearch();
  // }, [fetchPokeSearch]);

  // Request to fetch Pokemon
  // useCallback to memorize callback function
  // Only run the request once
  const fetchPokemon = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + queryParams)
      .then((res) => res.json())
      .then((data) => {
        setPokeList(data.results);
        console.log(data);
        if (totalResults === null) {
          setTotalResults(data.count);
        }
      });
  }, [queryParams, totalResults]); // Add Dependancies

  useEffect(() => {
    let resultOffset = currentPage * 20;
    setQueryParams("?limit=20&offset=" + resultOffset);
    fetchPokemon();
  }, [fetchPokemon, currentPage]); // Add Dependancies

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <ul className="results">
        <PokeSearch
          pokeSearchValue={pokeSearchValue}
          onPokeSearchValue={onPokeSearchValue}
          searchEvent={fetchPokeSearch}
        />
        {!pokeSearchValue &&
          pokeList.map((pokemon) => (
            <PokeItem key={pokemon.name} name={pokemon.name} />
          ))}
      </ul>
      <Pagination
        totalResults={totalResults}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
