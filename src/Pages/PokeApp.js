import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PokeItem from "../Component/PokeItem";
import PokeSearch from "../Component/PokeSearch";
import Pagination from "../Atom/Pagination";
import pokedex from "../pokedex.json";
import "./PokeApp.scss";

function PokeApp() {
  const navigate = useNavigate(); // Used to navigate to individual Project

  const [pokeList, setPokeList] = useState([]); // Current Pokemon Character List
  const [currentPage, setCurrentPage] = useState(0); // Current Page Number
  const [queryParams, setQueryParams] = useState("?limit=20&offset=0"); // Query Params
  const [totalResults, setTotalResults] = useState(null); // Total Result Count
  const [pokeSearchValue, setPokeSearchValue] = useState(""); // Search Value
  const [pokeSearchList, setPokeSearchList] = useState([]); // Current Pokemon Character List
  const [pokeGenerationFilter, setPokeGenerationFilter] = useState(null); // Current Generation Filter
  const [generationList, setGenerationList] = useState([]); // Current Generation List
  const [filterMenu, setFilterMenu] = useState(false); // Filter Menu

  // Note: the API doesn't return a search API. We have two options.
  // To Cache the result OR to use full-term search
  const fetchPokeSearch = useCallback(
    (e) => {
      //pokeSearchValue !== "" && setQueryParams(`/${pokeSearchValue}`);
      navigate("/pokemon/" + pokeSearchValue);
    },
    [pokeSearchValue, navigate]
  );

  // Set Rules for Input Change
  const pokeInputChange = (inputValue) => {
    setPokeSearchValue(inputValue);

    if (inputValue === "") {
      setCurrentPage(0);
    }

    if (inputValue !== "") {
      setCurrentPage(null);
    }

    // Filter Pokemon List and set both comparison selectors to lowercase
    setPokeSearchList(
      pokedex.filter((item) => {
        return item.toLowerCase().includes(inputValue.toLowerCase());
      })
    );
  };

  // Build the Options for Generation Filter List
  function GenerationFilterList() {
    return (
      <div className="ui-select">
        <button
          onClick={() => {
            setFilterMenu(!filterMenu);
          }}
        >
          {!pokeGenerationFilter && "Select"} {pokeGenerationFilter && "Change"}{" "}
          Generation
          {pokeGenerationFilter && ": " + pokeGenerationFilter}
        </button>
        {filterMenu && (
          <ul>
            <li
              className={!pokeGenerationFilter ? "active" : "noactive"}
              onClick={() => setPokeGenerationFilter(null)}
            >
              All
            </li>
            <li
              className={pokeGenerationFilter === 2 ? "active" : "noactive"}
              onClick={() => setPokeGenerationFilter(2)}
            >
              2
            </li>
            <li
              className={pokeGenerationFilter === 3 ? "active" : "noactive"}
              onClick={() => setPokeGenerationFilter(3)}
            >
              3
            </li>
            <li
              className={pokeGenerationFilter === 4 ? "active" : "noactive"}
              onClick={() => setPokeGenerationFilter(4)}
            >
              4
            </li>
            <li
              className={pokeGenerationFilter === 5 ? "active" : "noactive"}
              onClick={() => setPokeGenerationFilter(5)}
            >
              5
            </li>
            <li
              className={pokeGenerationFilter === 6 ? "active" : "noactive"}
              onClick={() => setPokeGenerationFilter(6)}
            >
              6
            </li>
            <li
              className={pokeGenerationFilter === 7 ? "active" : "noactive"}
              onClick={() => setPokeGenerationFilter(7)}
            >
              7
            </li>
            <li
              className={pokeGenerationFilter === 8 ? "active" : "noactive"}
              onClick={() => setPokeGenerationFilter(8)}
            >
              8
            </li>
          </ul>
        )}
      </div>
    );
  }

  useEffect(() => {
    if (pokeGenerationFilter) {
      fetch("https://pokeapi.co/api/v2/generation/" + pokeGenerationFilter)
        .then((res) => res.json())
        .then((data) => {
          setGenerationList(data.pokemon_species);
          if (totalResults === null) {
            setTotalResults(data.count);
          }
        });
    }

    setFilterMenu(false); // Always close menu when data is refreshed
  }, [pokeGenerationFilter]);

  // pokedex.filter((item) => {
  //   return item.toLowerCase().includes();
  // });

  // Request to fetch Pokemon
  // useCallback to memorize callback function
  // Only run the request once
  const fetchPokemon = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + queryParams)
      .then((res) => res.json())
      .then((data) => {
        setPokeList(data.results);

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
    <>
      <h1>Pokedex</h1>
      <PokeSearch
        pokeSearchValue={pokeSearchValue}
        onPokeSearchValue={setPokeSearchValue}
        searchEvent={fetchPokeSearch}
        pokeInputChange={pokeInputChange}
      />
      <GenerationFilterList setPokeGenerationFilter={setPokeGenerationFilter} />
      <ul className="results poke-app-results ui-scrollable">
        {!pokeSearchValue &&
          !pokeGenerationFilter &&
          pokeList.map((pokemon) => (
            <PokeItem key={pokemon.name} name={pokemon.name} />
          ))}
        {pokeSearchValue &&
          pokeSearchList.map((pokemon) => (
            <PokeItem key={pokemon} name={pokemon} />
          ))}
        {generationList &&
          generationList.map((pokemon, i) => (
            <PokeItem key={i} name={pokemon.name} />
          ))}
      </ul>
      {currentPage !== null && !pokeGenerationFilter && (
        <Pagination
          totalResults={totalResults}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}

export default PokeApp;
