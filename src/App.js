import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.scss";

import { useLocalStorage } from "./Hooks/useLocalStorage";
import { NotificationProvider } from "./Context/notificationContext";

import { BiHeart, BiGitCompare, BiNotification } from "react-icons/bi";
import { MdCatchingPokemon } from "react-icons/md";
import { GiCardRandom } from "react-icons/gi";

import Pokemon from "./Pages/Pokemon";
import Favourite from "./Pages/Favourite";
import Compare from "./Pages/Compare";
import PokeApp from "./Pages/PokeApp";
import Battle from "./Pages/Battle";
import Activity from "./Pages/Activity";
import NotificationBar from "./Component/Notification";

function App() {
  const [fav, setFav] = useLocalStorage("fav", []); // Use LocalStorage Hooks
  const [compare, setCompare] = useLocalStorage("compare", []); // Use LocalStorage Hooks
  const [pokemonSelection, setPokemonSelection] = useState([0, 1]);

  return (
    <NotificationProvider>
      <div className="app-c">
        <div className="mobile-interface-c">
          <NotificationBar />
          <BrowserRouter>
            <ul className="ui-header-navigation">Pokemon</ul>
            <ul className="ui-navigation">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={"/"}
                  tabIndex="1"
                >
                  <MdCatchingPokemon />
                  Pokedex
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={"/favourite"}
                  tabIndex="2"
                >
                  <BiHeart />
                  Favourite
                  {fav.length >= 1 && (
                    <span className="ui-navigation-count">{fav.length}</span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={"/compare"}
                  tabIndex="3"
                >
                  <BiGitCompare />
                  Compare
                  {compare.length >= 1 && (
                    <span className="ui-navigation-count">
                      {compare.length}
                    </span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={"/battle"}
                  tabIndex="4"
                >
                  <GiCardRandom />
                  Battle
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={"/activity"}
                  tabIndex="4"
                >
                  <BiNotification />
                  Activity
                </NavLink>
              </li>
            </ul>

            <div className="ui-body">
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
                <Route
                  path="/battle"
                  element={
                    <Battle
                      fav={fav}
                      setFav={setFav}
                      pokemonSelection={pokemonSelection}
                      setPokemonSelection={setPokemonSelection}
                    />
                  }
                />
                <Route path="/activity" element={<Activity />} />
                <Route path="*" element={<PokeApp />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </NotificationProvider>
  );
}

export default App;
