import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => setData(data.results));

    console.log(data);
  };

  return <div className="App"></div>;
}

export default App;
