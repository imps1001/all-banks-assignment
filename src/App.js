import './App.css';
import { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Home from './layout/Home.layout';
import Navs from './components/Navbar.component';

class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navs />
    <Home />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
