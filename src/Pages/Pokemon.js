import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "../Functions/useLocalStorage";
// https://blog.logrocket.com/using-localstorage-react-hooks/ - LocalStorage Hooks

const Pokemon = () => {
  let name = useParams(); // Retrieve the URL parameters
  const [pokeStat, setPokeStat] = useState(null); // Set Pokemon State
  const [fav, setFav] = useLocalStorage("fav", []); // Use LocalStorage Hooks

  // Fetch pokemon
  const fetchPokemon = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name.name)
      .then((res) => res.json())
      .then((data) => {
        setPokeStat(data);
      });
  }, [name.name]); // Add Dependancies

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]); // Add Dependancies

  // Add to Favourites as a Local Storage Object
  function pokeFavourite(name) {
    // Check if Pokemon is already in Favourites
    setFav(fav.includes(name) ? [...fav] : [...fav, name]);
  }

  // Remove Pokemon from Favourites as a Local Storage Object
  function pokeRemoveFavourite(name) {
    // Use Filter to remove Pokemon from Favourites
    setFav(fav.filter((item) => item !== name));
  }

  return (
    <div className="poke-card">
      {pokeStat && (
        <>
          <h2>Pokemon Name: {pokeStat.name}</h2>
          <img alt={pokeStat.name} src={pokeStat.sprites.front_default} />
          {!fav.includes(pokeStat.name) && (
            <button
              className="poke-favorite"
              onClick={() => pokeFavourite(pokeStat.name)}
            >
              Add to favorite
            </button>
          )}

          {fav.includes(pokeStat.name) && (
            <button
              className="poke-favorite"
              onClick={() => pokeRemoveFavourite(pokeStat.name)}
            >
              Remove to favorite
            </button>
          )}

          <div className="types">
            {pokeStat.types.map((type) => (
              <div key={type.slot}>{type.type.name}</div>
            ))}
          </div>

          <table className="table-fixed">
            <thead>
              <tr>
                <th>Base</th>
                <th>Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Weight</td>
                <td>{pokeStat.weight}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{pokeStat.height}</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{pokeStat.stats[4].base_stat}</td>
              </tr>
              <tr>
                <td>Defence</td>
                <td>{pokeStat.stats[3].base_stat}</td>
              </tr>
              <tr>
                <td>Special Attack</td>
                <td>{pokeStat.stats[2].base_stat}</td>
              </tr>
              <tr>
                <td>Special Defence</td>
                <td>{pokeStat.stats[1].base_stat}</td>
              </tr>
              <tr>
                <td>Health Points (HP)</td>
                <td>{pokeStat.stats[5].base_stat}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{pokeStat.stats[0].base_stat}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Pokemon;
