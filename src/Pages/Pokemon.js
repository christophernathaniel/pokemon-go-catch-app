import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const Pokemon = () => {
  let name = useParams();

  let defaultPokeState = {
    image: "",
    id: null,
    speed: "",
    shiny: false,
    hp: 0,
    defence: 0,
    attack: 0,
    specialDefence: 0,
    specialAttack: 0,
    weight: 0,
    types: [],
    sprites: [],
  };

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

      <h2>{pokeStat.name}</h2>
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
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pokemon;
