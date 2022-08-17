import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokeCard from "../Component/PokeCard";
// https://blog.logrocket.com/using-localstorage-react-hooks/ - LocalStorage Hooks
import { BiChevronLeft } from "react-icons/bi";

const Pokemon = ({ fav, setFav, compare, setCompare }) => {
  const navigate = useNavigate(); // Used to navigate to individual Project
  let name = useParams(); // Retrieve the URL parameters
  const [pokeStat, setPokeStat] = useState(null); // Set Pokemon State

  // URI is replacing fullstops and spaces with -
  let uri = name.name.replace(".", "").replace(" ", "-");

  // Fetch pokemon
  const fetchPokemon = useCallback(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + uri)
      .then((res) => res.json())
      .then((data) => {
        setPokeStat(data);
      });
  }, [uri]); // Add Dependancies

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]); // Add Dependancies

  return (
    <>
      <div className="back" onClick={() => navigate("/")}>
        <BiChevronLeft className="ui-back-button" />
      </div>
      <div className="pokemon">
        {pokeStat && (
          <PokeCard
            characteristic={pokeStat}
            fav={fav}
            setFav={setFav}
            compare={compare}
            setCompare={setCompare}
          />
        )}
      </div>
    </>
  );
};

export default Pokemon;
