import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      monsters:[],
      searchValue:''
    };
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response)=>response.json())
     .then((users)=>this.setState(()=>{
      return{ monsters: users}
     },()=>{
      console.log(this.state);
     })
     ) 
  }
  OnsearchChanged=(event)=>{
    const searchValue=event.target.value.toLocaleLowerCase();
    this.setState(()=>{ return{searchValue}}
    )
  };
  render()
  {
 const {monsters,searchValue}=this.state;
 const {OnsearchChanged}=this;
    const data=monsters.filter
    (monster=>monster.name.toLocaleLowerCase().includes(searchValue));

  return (
    <div className="App">
      <input className='searchBox' type='search' placeholder='search mosnters' 
      onChange={OnsearchChanged}/>
    {
      data.map((mosnter)=>{
       return <h1 key={mosnter.name}> {mosnter.name}</h1>
      })
    }
    </div>
  );
}
}
export default App;

