import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
function App() {
  return (
    <div className="App">
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="search-box">
        <div className="latest-trends">
          <h3>Latest trends</h3>
        </div>
        <div className="popular-suggestions"></div>
      </div>
    </div>
  );
}

export default App;
