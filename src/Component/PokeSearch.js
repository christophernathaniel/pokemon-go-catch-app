import { useState } from "react";

const PokeSearch = ({ pokeSearchValue, onPokeSearchValue, searchEvent }) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        value={pokeSearchValue}
        onChange={(event) => onPokeSearchValue(event.target.value)}
      />
      ]<button onClick={searchEvent}>Search</button>
    </div>
  );
};

export default PokeSearch;
