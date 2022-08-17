import { useLocalStorage } from "../Functions/useLocalStorage";

const Favourite = () => {
  const [fav, setFav] = useLocalStorage("fav", []); // Use LocalStorage Hook

  // Collect Pokemon
  // Option to Remove pokemon from Favourites

  return (
    <>
      <h1>Favourite</h1>
    </>
  );
};

export default Favourite;
