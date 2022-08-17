import { useLocalStorage } from "../Hooks/useLocalStorage";
import PokeCard from "../Component/PokeCard";

const Favourite = () => {
  const [fav, setFav] = useLocalStorage("fav", []); // Use LocalStorage Hook

  // Collect Pokemon
  // Option to Remove pokemon from Favourites

  return (
    <>
      {/* <div className="pokemon">
        {pokeStat && <PokeCard characteristic={pokeStat} />}
      </div> */}
    </>
  );
};

export default Favourite;
