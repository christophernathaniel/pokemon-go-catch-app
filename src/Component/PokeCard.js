// Possible Details for Pokemon
// https://pokeapi.co/api/v2/pokemon-species/{id or name}/ - Pokemon Species Details
// https://pokeapi.co/api/v2/pokemon-form/{id or name}/ - Pokemon Form Details
// https://pokeapi.co/api/v2/pokemon/{id or name}/ - Further Pokemon Details
// https://pokeapi.co/api/v2/move/{id or name}/ - Pokemin Move Details
// https://pokeapi.co/docs/v2#characteristics - Pokemin Characteristics
// https://pokeapi.co/api/v2/ability/{id or name}/
// https://pokeapi.co/api/v2/pokemon/venusaur/ - Pokemon Details

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaWeightHanging } from "react-icons/fa";

import {
  GiBroadsword,
  GiGooeySword,
  GiZebraShield,
  GiHealthPotion,
  GiSpeedometer,
  GiBodyHeight,
} from "react-icons/gi";
import { BsFillShieldFill } from "react-icons/bs";
import "./PokeCard.scss";
import { useState, useContext } from "react";
import NotificationContext from "../Context/notificationContext"; // Notification

const PokeCard = ({ characteristic, fav, setFav, compare, setCompare }) => {
  const notification = useContext(NotificationContext); // Notification Context

  const [spriteKey, setSpriteKey] = useState(
    characteristic.sprites["front_default"]
  );

  // Add to Favourites as a Local Storage Object
  function pokeFavourite(characteristic) {
    // Refactored to allow the entire character to be added to local storage
    // Size of Local Storage Limit is 5mb. Each Pokemon is 25kb. Approximate of 200 Pokemon.
    let isAdded = fav.some((item) => {
      return item.name === characteristic.name;
    })
      ? false
      : true;

    if (isAdded) {
      setFav([...fav, { name: characteristic.name, char: characteristic }]);
      // setNotification([
      notification.success(
        "Pokemon " + characteristic.name + " added to favourites"
      );
    }

    if (!isAdded) {
      notification.error(
        "Pokemon " + characteristic.name + " not added to favourites"
      );
    }
  }

  // Remove Pokemon from Favourites as a Local Storage Object
  function pokeRemoveFavourite(characteristic) {
    // Use Filter to remove Pokemon from Favourites
    setFav(fav.filter((item) => item.name !== characteristic.name));

    notification.success(
      "Pokemon " + characteristic.name + " removed to favourites"
    );
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
      <h2 className="charactaristic-name">{characteristic.name}</h2>
      <div className="poke-card-keyinformation">
        <div className="types">
          <ul className="type-list">
            {characteristic.types.map((type, i) => (
              <li key={i} className={type.type.name}>
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
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
        </div>
      </div>

      <div className="characteristic-image">
        <img alt={characteristic.name} src={spriteKey} />
      </div>
      <div className="pokemon-view-options">
        <span
          className="sprite-front"
          onClick={() => {
            setSpriteKey(characteristic.sprites["front_default"]);
          }}
        >
          Front
        </span>
        <span
          className="sprite-back"
          onClick={() => {
            setSpriteKey(characteristic.sprites["back_default"]);
          }}
        >
          Back
        </span>
        <span
          className="sprite-shiny"
          onClick={() => {
            setSpriteKey(characteristic.sprites["front_shiny"]);
          }}
        >
          Shiny
        </span>
      </div>

      <div className="pokemon-stats">
        <table className="table-fixed">
          <tbody>
            <tr>
              <td>
                <span className="statistic-icon">
                  <FaWeightHanging /> Weight
                </span>
              </td>
              <td>{characteristic.weight}</td>
            </tr>
            <tr>
              <td>
                <span className="statistic-icon">
                  <GiBodyHeight />
                  Height
                </span>
              </td>
              <td>{characteristic.height}</td>
            </tr>
            <tr>
              <td>
                <span className="statistic-icon">
                  <GiBroadsword />
                  Attack
                </span>
              </td>
              <td>{characteristic.stats[4].base_stat}</td>
            </tr>
            <tr>
              <td>
                <span className="statistic-icon">
                  <BsFillShieldFill />
                  Defence
                </span>
              </td>
              <td>{characteristic.stats[3].base_stat}</td>
            </tr>
            <tr>
              <td>
                <span className="statistic-icon">
                  <GiGooeySword />
                  Special Attack
                </span>
              </td>
              <td>{characteristic.stats[2].base_stat}</td>
            </tr>
            <tr>
              <td>
                <span className="statistic-icon">
                  <GiZebraShield />
                  Special Defence
                </span>
              </td>
              <td>{characteristic.stats[1].base_stat}</td>
            </tr>
            <tr>
              <td>
                <span className="statistic-icon">
                  <GiHealthPotion />
                  Health Points (HP)
                </span>
              </td>
              <td>{characteristic.stats[5].base_stat}</td>
            </tr>
            <tr>
              <td>
                <span className="statistic-icon">
                  <GiSpeedometer />
                  Speed
                </span>
              </td>
              <td>{characteristic.stats[0].base_stat}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="abilties">
        <ul className="ability-list">
          {characteristic.abilities.map((ability, i) => (
            <li key={i} className={ability.ability.name}>
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="comparison-options">
        {!compare.some((item) => {
          return item.name === characteristic.name;
        }) && (
          <button
            className="poke-comparison ui-button inactive"
            onClick={() => pokeCompare(characteristic)}
          >
            Compare
          </button>
        )}

        {compare.some((item) => {
          return item.name === characteristic.name;
        }) && (
          <button
            className="poke-comparison ui-button active"
            onClick={() => pokeRemoveCompare(characteristic)}
          >
            Uncompare
          </button>
        )}
      </div>
    </div>
  );
};

export default PokeCard;
