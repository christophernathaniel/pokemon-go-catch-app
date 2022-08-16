import { useState, useEffect, useCallback } from "react";
import PokeItem from "./Component/PokeItem";
import PokeSearch from "./Component/PokeSearch";
function App() {
  const [pokeList, setPokeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [queryParams, setQueryParams] = useState("?limit=20&offset=0");
  const [totalResults, setTotalResults] = useState(null);
  const [pokeSearchValue, onPokeSearchValue] = useState("");

  const fetchPokeSearch = useCallback((e) => {
    console.log("retrieved");
  }, []);

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
        {pokeList.map((pokemon) => (
          <PokeItem key={pokemon.name} name={pokemon.name} />
        ))}
      </ul>
      {currentPage >= 1 && (
        <button
          className="show-less"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Show Less
        </button>
      )}
      {currentPage < totalResults && (
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
