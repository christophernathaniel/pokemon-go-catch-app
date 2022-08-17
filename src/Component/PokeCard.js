// Possible Details for Pokemon
// https://pokeapi.co/api/v2/pokemon-species/{id or name}/ - Pokemon Species Details
// https://pokeapi.co/api/v2/pokemon-form/{id or name}/ - Pokemon Form Details
// https://pokeapi.co/api/v2/pokemon/{id or name}/ - Further Pokemon Details
// https://pokeapi.co/api/v2/move/{id or name}/ - Pokemin Move Details
// https://pokeapi.co/docs/v2#characteristics - Pokemin Characteristics
// https://pokeapi.co/api/v2/ability/{id or name}/
// https://pokeapi.co/api/v2/pokemon/venusaur/ - Pokemon Details

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./PokeCard.scss";

const PokeCard = ({ characteristic, fav, setFav, compare, setCompare }) => {
  // Add to Favourites as a Local Storage Object
  function pokeFavourite(characteristic) {
    // Refactored to allow the entire character to be added to local storage
    // Size of Local Storage Limit is 5mb. Each Pokemon is 25kb. Approximate of 200 Pokemon.
    fav.some((item) => {
      return item.name === characteristic.name;
    })
      ? console.log("already added")
      : setFav([...fav, { name: characteristic.name, char: characteristic }]);
  }

  // Remove Pokemon from Favourites as a Local Storage Object
  function pokeRemoveFavourite(characteristic) {
    // Use Filter to remove Pokemon from Favourites
    setFav(fav.filter((item) => item.name !== characteristic.name));
  }

  // Add to Favourites as a Local Storage Object
  function pokeCompare(characteristic) {
    // Refactored to allow the entire character to be added to local storage
    // Size of Local Storage Limit is 5mb. Each Pokemon is 25kb. Approximate of 200 Pokemon.
    compare.some((item) => {
      return item.name === characteristic.name;
    })
      ? console.log("already added")
      : setCompare([
          ...compare,
          { name: characteristic.name, char: characteristic },
        ]);
  }

  // Remove Pokemon from Favourites as a Local Storage Object
  function pokeRemoveCompare(characteristic) {
    // Use Filter to remove Pokemon from Favourites
    setCompare(compare.filter((item) => item.name !== characteristic.name));
  }

  return (
    <div className="poke-card">
      <>
        <h2 className="charactaristic-name">{characteristic.name}</h2>
        <img
          alt={characteristic.name}
          src={characteristic.sprites.front_default}
        />

        {!fav.some((item) => {
          return item.name === characteristic.name;
        }) && (
          <button
            className="poke-favorite"
            onClick={() => pokeFavourite(characteristic)}
          >
            <AiOutlineHeart />
          </button>
        )}

        {fav.some((item) => {
          return item.name === characteristic.name;
        }) && (
          <button
            className="poke-favorite"
            onClick={() => pokeRemoveFavourite(characteristic)}
          >
            <AiFillHeart />
          </button>
        )}

        {!compare.some((item) => {
          return item.name === characteristic.name;
        }) && (
          <button
            className="poke-comparison"
            onClick={() => pokeCompare(characteristic)}
          >
            Compare
          </button>
        )}

        {compare.some((item) => {
          return item.name === characteristic.name;
        }) && (
          <button
            className="poke-comparison"
            onClick={() => pokeRemoveCompare(characteristic)}
          >
            Uncompare
          </button>
        )}

        <div className="types">
          {characteristic.types.map((type) => (
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
              <td>{characteristic.weight}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{characteristic.height}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{characteristic.stats[4].base_stat}</td>
            </tr>
            <tr>
              <td>Defence</td>
              <td>{characteristic.stats[3].base_stat}</td>
            </tr>
            <tr>
              <td>Special Attack</td>
              <td>{characteristic.stats[2].base_stat}</td>
            </tr>
            <tr>
              <td>Special Defence</td>
              <td>{characteristic.stats[1].base_stat}</td>
            </tr>
            <tr>
              <td>Health Points (HP)</td>
              <td>{characteristic.stats[5].base_stat}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{characteristic.stats[0].base_stat}</td>
            </tr>
          </tbody>
        </table>
      </>
    </div>
  );
};

export default PokeCard;
