import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from "./components/SignIn";
import Appbar from './components/Appbar'
import Card from './components/Card'
import './App.css';

class App extends Component{
  render = () => {
    return (
      <div className="App">
        <Router>
          <Appbar />
          <Route exact path="/" component={Card}/>
          <Route path="/SignIn" component={SignIn}/>
        </Router>
      </div>
    );
  }
}

export default App;
