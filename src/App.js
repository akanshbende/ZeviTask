import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import { useState, useEffect } from "react";
function App() {
  const productsUrl = "https://fakestoreapi.com/products";
  const [productData, setProductData] = useState();

  const getData = async () => {
    try {
      const response = await fetch(productsUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(productData);

  return (
    <div className="App">
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="search-box">
        <div className="latest-trends">
          <h3>Latest trends</h3>
          <div className="latest-trends"></div>
        </div>
        <div className="popular-suggestions"></div>
      </div>
    </div>
  );
}

export default App;
