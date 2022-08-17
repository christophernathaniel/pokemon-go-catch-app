import { useLocalStorage } from "../Hooks/useLocalStorage";
import PokeFav from "../Component/PokeFav";

const Favourite = ({ fav, setFav, compare, setCompare }) => {
  // Collect Pokemon
  // Option to Remove pokemon from Favourites

  return (
    <div className="pokemon ui-scrollable">
      {fav.map((pokeStat) => (
        <PokeFav
          key={pokeStat.name}
          characteristic={pokeStat.char}
          fav={fav}
          setFav={setFav}
          compare={compare}
          setCompare={setCompare}
        />
      ))}
    </div>
  );
};

export default Favourite;
