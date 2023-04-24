import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import CardList from "./Components/card-list/card-list";
import SearchBox from "./Components/search-box/SearchBox";

function App() {
  const [monster, setMonster] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    return () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setMonster(users));
    };
  }, []);

  const filterMonsters = monster.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  const onSearchChange = (event) => {
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };
  return (
    <div className="App">
      {/* <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={onSearchChange}
      /> */}
      {/* {filterMonsters.map((monster) => {
        return <h3 key={monster.id}>{monster.name}</h3>;
      })} */}
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monstaers search-box"
      />
      <CardList monster={filterMonsters} />
    </div>
  );
}

export default App;
