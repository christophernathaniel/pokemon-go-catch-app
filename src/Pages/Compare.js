import { useLocalStorage } from "../Hooks/useLocalStorage";

const Compare = () => {
  const [compare, setCompare] = useLocalStorage("compare", []); // Use LocalStorage Hooks

  // Collect Pokepon
  // Request Values
  // Create an AVERAGE from all values
  // Display Red or Green depending on the Average
  // Potentially Colour Grade (harsher Red or harsher Green) depending on the Average
  // Remove from Compare
  // Potentially Reorder from Compare

  return (
    <>
      <h1>Favourite</h1>
    </>
  );
};

export default Compare;
