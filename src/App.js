import { useState, useEffect} from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters,setMonsters]=useState([]);
  const [filtredMosters,setFilterMonsters]=useState(monsters);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((users) =>setMonsters(users));
  },[]);

  useEffect(()=>{
   const newFiltredMonster= monsters.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(searchField));
    setFilterMonsters(newFiltredMonster);
  },[monsters,searchField])
  
  const OnsearchChanged = (event) => {
    const searchValueString = event.target.value.toLocaleLowerCase();
    setSearchField(searchValueString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={OnsearchChanged}
        placeHolder={"search monster"}
        className="mosnter-search-box"
      />
      <CardList monsters={filtredMosters}/>
    </div>
  );
};


/*class App extends Component {
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
        <h1 className="app-title"> Monsters ropo</h1>
     <SearchBox 
     onChangeHandler={OnsearchChanged}
       placeHolder={'search monster'}
       className="mosnter-search-box"/>
        <CardList monsters={filtredMosters}/>
      </div>
    );
  }
}*/
export default App;
