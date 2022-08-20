import { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import NotificationContext from "../Context/notificationContext"; // Notification

import {
  GiBroadsword,
  GiGooeySword,
  GiZebraShield,
  GiHealthPotion,
  GiSpeedometer,
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
  const notification = useContext(NotificationContext); // Notification Context

  // Add to Favourites as a Local Storage Object
  function pokeFavourite(characteristic) {
    // Refactored to allow the entire character to be added to local storage
    // Size of Local Storage Limit is 5mb. Each Pokemon is 25kb. Approximate of 200 Pokemon.
    fav.some((item) => {
      return item.name === characteristic.name;
    })
      ? console.log("already added")
      : setFav([...fav, { name: characteristic.name, char: characteristic }]);

    notification.success(
      "Pokemon " + characteristic.name + " added to favourites"
    );
  }

  // Remove Pokemon from Favourites as a Local Storage Object
  function pokeRemoveFavourite(characteristic) {
    // Use Filter to remove Pokemon from Favourites
    setFav(fav.filter((item) => item.name !== characteristic.name));

    notification.success(
      "Pokemon " + characteristic.name + " removed to favourites"
    );
  }

  // Remove Pokemon from Favourites as a Local Storage Object
  function pokeRemoveCompare(characteristic) {
    // Use Filter to remove Pokemon from Favourites
    setCompare(compare.filter((item) => item.name !== characteristic.name));
  }

  // Compare Stats with Value and Average
  function StatComparison({ value, average }) {
    // If Value and Averages are the same
    if (Number(value) === Number(average)) {
      return <div className="stat-maintain">{value}</div>;
    }

    // If Value is more than Average (+++)
    if (Number(value) > Number(average)) {
      return (
        <div className="stat stat-increase">
          {value}
          <GoPlus />
        </div>
      );
    }

    // If Value is less than Average (---)
    if (Number(value) < Number(average)) {
      return (
        <div className="stat stat-decrease">
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

      <div className="pokemon-stats">
        <table className="table-fixed">
          <tbody>
            <tr>
              <td>
                <span className="statistic-icon">
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
                <span className="statistic-icon">
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
                <span className="statistic-icon">
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
                <span className="statistic-icon">
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
                <span className="statistic-icon">
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
                <span className="statistic-icon">
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

      <div className="comparison-options">
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
