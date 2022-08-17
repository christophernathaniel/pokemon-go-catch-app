import { Link } from "react-router-dom";
import "./PokeItem.scss";

const PokeItem = ({ name }) => {
  return (
    <li className="poke-item">
      <Link to={"/pokemon/" + name.toLowerCase()}>{name}</Link>
    </li>
  );
};

export default PokeItem;
