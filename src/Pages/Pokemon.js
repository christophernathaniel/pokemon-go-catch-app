import { useParams } from "react-router-dom";

const Pokemon = () => {
  let name = useParams();
  return (
    <div className="poke-card">
      <h1>Pokemon</h1>
      <h2>{name.name}</h2>
    </div>
  );
};

export default Pokemon;
