import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import Appbar from './components/Appbar';
import CardView from './components/CardView';
import MyDonation from './components/MyDonation';
import MySupport from './components/MySupport';
import './App.css';

class App extends Component{
  render = () => {
    return (
      <div className="App">
        <Router>
          <Appbar />
          <Route exact path="/" component={CardView}/>
          <Route path="/SignIn" component={SignIn}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/MySupport" component={MySupport}/>
          <Route path="/MyDonation" component={MyDonation}/>
        </Router>
      </div>
    );
  }
}

export default App;
