/* Currently Under Construction */

import { useState } from "react";

const Battle = ({ fav, setFav }) => {
  const [pokemonSelection, setPokemonSelection] = useState([]);
  const [selection, setSelection] = useState(1);

  console.log(fav);

  function PokemonList({ fav, selection }) {
    function makeSelection(item, selection) {
      let i = selection === 1 ? 0 : 1;
      let items = pokemonSelection;
      items[i] = item;

      setPokemonSelection(items);

      console.log(pokemonSelection);
    }

    return fav.map((item, index) => {
      return (
        <p onClick={() => makeSelection(item, selection)} key={item.name}>
          {item.name}
        </p>
      );
    });
  }

  function Selection() {
    return (
      <div className="selection-container">
        <div className="selection" onClick={() => setSelection(1)}>
          One
        </div>
        <div className="selection" onClick={() => setSelection(2)}>
          Two
        </div>
      </div>
    );
  }

  return (
    <div>
      <Selection />
      <PokemonList fav={fav} selection={selection} />
    </div>
  );
};

export default Battle;
