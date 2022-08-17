import { useLocalStorage } from "../Hooks/useLocalStorage";
import PokeCompare from "../Component/PokeCompare";

const Compare = ({ fav, setFav, compare, setCompare }) => {
  // Collect Pokepon
  // Request Values
  // Create an AVERAGE from all values
  // Display Red or Green depending on the Average
  // Potentially Colour Grade (harsher Red or harsher Green) depending on the Average
  // Remove from Compare
  // Potentially Reorder from Compare

  // Use reduce to add all of the numbers together, and then device by items
  // This will create an Average
  console.log(
    compare.reduce(
      (total, currentValue) =>
        (total = total + currentValue.char.stats[0].base_stat),
      0
    ) / 2
  );

  return (
    <div className="pokemon ui-scrollable">
      {compare.map((pokeStat) => (
        <PokeCompare
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

export default Compare;
