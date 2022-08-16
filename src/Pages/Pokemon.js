import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const Pokemon = () => {
  let name = useParams();

  let defaultPokeState = null;

  const [pokeStat, setPokeStat] = useState(defaultPokeState);

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

  return (
    <div className="poke-card">
      {/* {console.log(pokeStat.sprites.front_default)}
      <h1>Pokemon</h1>
      <h2>{pokeStat.name}</h2>
      <img src={pokeStat.sprites.front_default} /> */}
      {pokeStat && (
        <>
          <h2>Pokemon Name: {pokeStat.name}</h2>
          <img src={pokeStat.sprites.front_default} />

          <table class="table-fixed">
            <thead>
              <tr>
                <th>Base</th>
                <th>Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Attack</td>
                <td>{pokeStat.stats[4].base_stat}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Pokemon;
