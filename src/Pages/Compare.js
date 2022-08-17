import { useLocalStorage } from "../Hooks/useLocalStorage";
import PokeCard from "../Component/PokeCard";

const Compare = ({ fav, setFav, compare, setCompare }) => {
  // Collect Pokepon
  // Request Values
  // Create an AVERAGE from all values
  // Display Red or Green depending on the Average
  // Potentially Colour Grade (harsher Red or harsher Green) depending on the Average
  // Remove from Compare
  // Potentially Reorder from Compare

  return (
    <div>
      <div className="pokemon">
        {compare.map((pokeStat) => (
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

export default Compare;
