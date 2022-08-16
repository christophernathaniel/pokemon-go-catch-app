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

          <div class="types">
            {pokeStat.types.map((type) => (
              <div>{type.type.name}</div>
            ))}
          </div>

          <table class="table-fixed">
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
