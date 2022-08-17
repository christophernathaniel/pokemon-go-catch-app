import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pokemon from "./Pages/Pokemon";
import Favourite from "./Pages/Favourite";
import Compare from "./Pages/Compare";
import PokeApp from "./Pages/PokeApp";
import { useLocalStorage } from "./Hooks/useLocalStorage";

function App() {
  const [fav, setFav] = useLocalStorage("fav", []); // Use LocalStorage Hooks
  const [compare, setCompare] = useLocalStorage("compare", []); // Use LocalStorage Hooks

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={"/"}>Pokidex</Link>
          <Link to={"/favourite"}>Favourite</Link>
          <Link to={"/compare"}>Compare</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<PokeApp />} />
        <Route
          path="/pokemon/:name"
          element={
            <Pokemon
              fav={fav}
              setFav={setFav}
              compare={compare}
              setCompare={setCompare}
            />
          }
        />
        <Route
          path="/favourite"
          element={
            <Favourite
              fav={fav}
              setFav={setFav}
              compare={compare}
              setCompare={setCompare}
            />
          }
        />
        <Route
          path="/compare"
          element={
            <Compare
              fav={fav}
              setFav={setFav}
              compare={compare}
              setCompare={setCompare}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
