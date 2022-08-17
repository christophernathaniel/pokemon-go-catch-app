import { useLocalStorage } from "../Hooks/useLocalStorage";
import PokeCard from "../Component/PokeCard";

const Favourite = ({ fav, setFav, compare, setCompare }) => {
  // Collect Pokemon
  // Option to Remove pokemon from Favourites

  return (
    <div>
      <div className="pokemon">
        {fav.map((pokeStat) => (
          <PokeCard
            key={pokeStat.name}
            characteristic={pokeStat.char}
            fav={fav}
            setFav={setFav}
            compare={compare}
            setCompare={setCompare}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourite;
