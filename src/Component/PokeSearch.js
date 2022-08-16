const PokeSearch = ({ pokeSearchValue, onPokeSearchValue, searchEvent }) => {
  // Poke Search Value is the value of the search input
  // onPokeSearch is the function to change pokesearchvalue
  // searchEvent is the function to call on the search event

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
