import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Pokemon from "./Pages/Pokemon";
import Favourite from "./Pages/Favourite";
import Compare from "./Pages/Compare";
import PokeApp from "./Pages/PokeApp";
import Activity from "./Pages/Activity";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import "./App.scss";
import {
  BiShapeCircle,
  BiHeart,
  BiGitCompare,
  BiNotification,
} from "react-icons/bi";
import { NotificationProvider } from "./Context/notificationContext";
import NotificationBar from "./Component/Notification";
import { MdCatchingPokemon } from "react-icons/md";

function App() {
  const [fav, setFav] = useLocalStorage("fav", []); // Use LocalStorage Hooks
  const [compare, setCompare] = useLocalStorage("compare", []); // Use LocalStorage Hooks

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
                <Route path="/activity" element={<Activity />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </NotificationProvider>
  );
}

export default App;
