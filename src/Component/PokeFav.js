import { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import NotificationContext from "../Context/notificationContext"; // Notification

import "./PokeFav.scss";

const PokeCard = ({ characteristic, fav, setFav, compare, setCompare }) => {
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
  }

  // Remove Pokemon from Favourites as a Local Storage Object
  function pokeRemoveFavourite(characteristic) {
    // Use Filter to remove Pokemon from Favourites
    setFav(fav.filter((item) => item.name !== characteristic.name));

    notification.success(
      "Pokemon " + characteristic.name + " removed to favourites"
    );
  }

  return (
    <div className="poke-fav">
      <Link to={"/pokemon/" + characteristic.name.toLowerCase()}>
        <div className="characteristic-image">
          <img
            alt={characteristic.name}
            src={characteristic.sprites["front_default"]}
          />
        </div>
        <h2 className="charactaristic-name">{characteristic.name}</h2>
      </Link>

      <div className="poke-fav-keyinformation">
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
    </div>
  );
};

export default PokeCard;
