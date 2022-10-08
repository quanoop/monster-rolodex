import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/searchbox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearchChange = (event) => {
    const keyword = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField: keyword };
    });
  };

  render() {
    const { monsters, searchField } = this.state;

    const { onSearchChange } = this;

    const filterdMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox className="search-box" onChangeHandler={onSearchChange} />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
