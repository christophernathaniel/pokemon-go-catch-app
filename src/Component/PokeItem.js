import { Link } from "react-router-dom";

const PokeItem = ({ name }) => {
  return (
    <li className="poke-item">
      <Link to={"/pokemon/" + name}>{name}</Link>
    </li>
  );
};

export default PokeItem;
