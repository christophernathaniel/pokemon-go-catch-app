/* Currently Under Construction */

import { useState } from "react";
import "./Battle.scss";

const Battle = ({ fav, setFav, pokemonSelection, setPokemonSelection }) => {
  const [selection, setSelection] = useState(1);

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
    if (fav.length > 1) {
      return fav.map((item, index) => {
        return (
          <div
            className={
              pokemonSelection[selection - 1].name === item.name ? "active" : ""
            }
            onClick={() => makeSelection(item, selection)}
            key={item.name}
          >
            {item.char && (
              <img src={item.char.sprites.front_default} alt={item.name} />
            )}
            {item.name}
          </div>
        );
      });
    } else {
      return <p className="no-item-small">Please Add Pokemon to Favourites</p>;
    }
  }

  // Change the Selection
  function Selection({ pokemonSelection }) {
    return pokemonSelection.map((item, index) => {
      // Each loop increases its setSelection count
      let count = index + 1;
      return (
        <div
          key={index}
          onClick={() => {
            setSelection(count);
          }}
          className={selection === count ? "selection active" : "selection"}
        >
          <div className="battle-selection-identifier">Player {count}</div>
          {item.char && (
            <>
              <img src={item.char.sprites.front_default} alt={item.name} />
              <div className="battle-selection-name">{item.name}</div>
            </>
          )}
        </div>
      );
    });
  }

  return (
    <div className="battle ui-scrollable">
      <h2 className="battle-theme-title">Select your Player</h2>
      <div className="pokemon-selection">
        <Selection pokemonSelection={pokemonSelection} />
      </div>
      <h2 className="battle-theme-title">Select your Pokemon</h2>
      <div className="battle-selection-list">
        <PokemonList fav={fav} selection={selection} />
      </div>
    </div>
  );
};

export default Battle;
