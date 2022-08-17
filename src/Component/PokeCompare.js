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
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import "./PokeCompare.scss";

const PokeCompare = ({
  characteristic,
  fav,
  setFav,
  compare,
  setCompare,
  average,
}) => {
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

  function StatComparison({ value, average }) {
    if (Number(value) === Number(average)) {
      return <div class="stat-maintain">{value}</div>;
    }

    if (Number(value) > Number(average)) {
      return (
        <div class="stat stat-increase">
          {value}
          <GoPlus />
        </div>
      );
    }

    if (Number(value) < Number(average)) {
      return (
        <div class="stat stat-decrease">
          {value}
          <HiMinus />
        </div>
      );
    }
  }

  return (
    <div className="poke-compare">
      <h2 className="charactaristic-name">{characteristic.name}</h2>
      <div className="poke-card-keyinformation">
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
        <img
          alt={characteristic.name}
          src={characteristic.sprites["front_default"]}
        />
      </div>

      <div class="pokemon-stats">
        <table className="table-fixed">
          <tbody>
            <tr>
              <td>
                <span class="statistic-icon">
                  <GiBroadsword />
                  Attack
                </span>
              </td>
              <td>
                <StatComparison
                  value={characteristic.stats[4].base_stat}
                  average={average[1]}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span class="statistic-icon">
                  <BsFillShieldFill />
                  Defence
                </span>
              </td>
              <td>
                <StatComparison
                  value={characteristic.stats[3].base_stat}
                  average={average[2]}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span class="statistic-icon">
                  <GiGooeySword />
                  Special Attack
                </span>
              </td>
              <td>
                {" "}
                <StatComparison
                  value={characteristic.stats[2].base_stat}
                  average={average[3]}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span class="statistic-icon">
                  <GiZebraShield />
                  Special Defence
                </span>
              </td>
              <td>
                {" "}
                <StatComparison
                  value={characteristic.stats[1].base_stat}
                  average={average[4]}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span class="statistic-icon">
                  <GiHealthPotion />
                  Health Points (HP)
                </span>
              </td>
              <td>
                {" "}
                <StatComparison
                  value={characteristic.stats[5].base_stat}
                  average={average[0]}
                />
              </td>
            </tr>
            <tr>
              <td>
                <span class="statistic-icon">
                  <GiSpeedometer />
                  Speed
                </span>
              </td>
              <td>
                {" "}
                <StatComparison
                  value={characteristic.stats[0].base_stat}
                  average={average[5]}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div clasName="comparison-options">
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

export default PokeCompare;
