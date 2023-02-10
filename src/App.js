import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }

  OnsearchChanged = (event) => {
    const searchValue = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchValue };
    });
  };

  render() {
    const { monsters, searchValue } = this.state;
    const { OnsearchChanged } = this;
    const filtredMosters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchValue)
    );

    return (
      <div className="App">
        
     <SearchBox 
     onChangeHandler={OnsearchChanged}
       placeHolder={'search monster'}
       className="mosnter-search-box"/>
        <CardList monsters={filtredMosters}/>
      </div>
    );
  }
}
export default App;
