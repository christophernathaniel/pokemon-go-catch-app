import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const Pokemon = () => {
  let name = useParams();

  let defaultPokeState = null;

  const [pokeStat, setPokeStat] = useState(defaultPokeState);

  // get Favourites from Local Storage
  const [fav, setFav] = useState(() => {
    const getFav = localStorage.getItem("favourites");
    console.log(getFav);
    return getFav ? JSON.parse(getFav) : [];
  });

  const fetchPokemon = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name.name)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPokeStat(data);
      });
  }, []); // Add Dependancies

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]); // Add Dependancies

  function pokeFavourite(name) {
    console.log("helo");
    localStorage.setItem(
      "favourites",
      JSON.stringify(fav.includes(name) ? [...fav] : [...fav, name])
    );
  }

  return (
    <div className="poke-card">
      {pokeStat && (
        <>
          <h2>Pokemon Name: {pokeStat.name}</h2>
          <img src={pokeStat.sprites.front_default} />
          <button
            className="poke-favorite"
            onClick={() => pokeFavourite(pokeStat.name)}
          >
            Add to favorite
          </button>

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
