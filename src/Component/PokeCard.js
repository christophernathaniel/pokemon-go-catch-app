// Possible Details for Pokemon
// https://pokeapi.co/api/v2/pokemon-species/{id or name}/ - Pokemon Species Details
// https://pokeapi.co/api/v2/pokemon-form/{id or name}/ - Pokemon Form Details
// https://pokeapi.co/api/v2/pokemon/{id or name}/ - Further Pokemon Details
// https://pokeapi.co/api/v2/move/{id or name}/ - Pokemin Move Details
// https://pokeapi.co/docs/v2#characteristics - Pokemin Characteristics
// https://pokeapi.co/api/v2/ability/{id or name}/

const pokeCard = ({ name, characteristics }) => {
  return (
    <div className="poke-card">
      {name}
      {characteristics.map((characteristic) => (
        <div key={characteristic.hp}>{characteristic.name}</div>
      ))}
    </div>
  );
};

export default pokeCard;
