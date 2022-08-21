/* Currently Under Construction */

import { useState, useEffect } from "react";

const Battle = ({ fav, setFav }) => {
  const [pokemonSelection, setPokemonSelection] = useState([0, 1]);
  const [selection, setSelection] = useState(1);

  console.log(fav);

  // Manage the Pokemon List
  function PokemonList({ fav, selection }) {
    // Manage the Pokemon Selection
    // uses Selection to determine which Pokemon is selected
    // Adds to the pokemonSelection array
    function makeSelection(item, selection) {
      let i = selection === 1 ? 0 : 1;
      let items = pokemonSelection.slice(); // Slice used to copy the array and show render change
      items[i] = item;
      setPokemonSelection(items);
    }

    // Output component for Pokemon List
    return fav.map((item, index) => {
      return (
        <p onClick={() => makeSelection(item, selection)} key={item.name}>
          {item.name}
        </p>
      );
    });
  }

  // Change the Selection
  function Selection({ pokemonSelection }) {
    return pokemonSelection.map((item, index) => {
      // Each loop increases its setSelection count
      let count = index + 1;
      return (
        <div
          onClick={() => {
            setSelection(count);
          }}
        >
          test
          {item.name}
        </div>
      );
    });
  }

  return (
    <div>
      <Selection pokemonSelection={pokemonSelection} />
      <PokemonList fav={fav} selection={selection} />
    </div>
  );
};

export default Battle;
