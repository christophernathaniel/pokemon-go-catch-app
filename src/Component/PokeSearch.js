import { FiSearch } from "react-icons/fi";

const PokeSearch = ({ pokeSearchValue, pokeInputChange, searchEvent }) => {
  // Poke Search Value is the value of the search input
  // onPokeSearch is the function to change pokesearchvalue
  // searchEvent is the function to call on the search event

  return (
    <div className="ui-search">
      <input
        type="text"
        name="search"
        placeholder="Search Pokedex"
        value={pokeSearchValue}
        onChange={(event) => pokeInputChange(event.target.value)}
      />
      <FiSearch onClick={searchEvent} />
    </div>
  );
};

export default PokeSearch;
