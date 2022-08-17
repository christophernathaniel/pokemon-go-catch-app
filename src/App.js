import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "./Pages/Pokemon";
import Favourite from "./Pages/Favourite";
import Compare from "./Pages/Compare";
import PokeApp from "./Pages/PokeApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeApp />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
