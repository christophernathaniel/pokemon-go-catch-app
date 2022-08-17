import { useLocalStorage } from "../Hooks/useLocalStorage";
import PokeCompare from "../Component/PokeCompare";
import { useState, useEffect, componentDidMount } from "react";

const Compare = ({ fav, setFav, compare, setCompare }) => {
  const [average, setAverage] = useState([]);

  // Collect Pokepon
  // Request Values
  // Create an AVERAGE from all values
  // Display Red or Green depending on the Average
  // Potentially Colour Grade (harsher Red or harsher Green) depending on the Average
  // Remove from Compare
  // Potentially Reorder from Compare

  // Use reduce to add all of the numbers together, and then device by items
  // This will create an Average

  console.log(compare);

  useEffect(() => {
    let holdAverages = [];

    // Order of Values
    // HP, Attack, Defense, Special Attack, Special Defense, Speed

    setAverage([
      ...holdAverages,
      compare.reduce(
        (total, currentValue) =>
          (total = total + currentValue.char.stats[0].base_stat),
        0
      ) / 2,
      ...holdAverages,
      compare.reduce(
        (total, currentValue) =>
          (total = total + currentValue.char.stats[1].base_stat),
        0
      ) / 2,
      ...holdAverages,
      compare.reduce(
        (total, currentValue) =>
          (total = total + currentValue.char.stats[2].base_stat),
        0
      ) / 2,
      ...holdAverages,
      compare.reduce(
        (total, currentValue) =>
          (total = total + currentValue.char.stats[3].base_stat),
        0
      ) / 2,
      ...holdAverages,
      compare.reduce(
        (total, currentValue) =>
          (total = total + currentValue.char.stats[4].base_stat),
        0
      ) / 2,
      ...holdAverages,
      compare.reduce(
        (total, currentValue) =>
          (total = total + currentValue.char.stats[5].base_stat),
        0
      ) / 2,
    ]);
  }, []);

  useEffect(() => {
    console.log(average);
  }, [average]);

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
