import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import CardView from './components/CardView2';
import MyDonation from './components/MyDonation';
import MySupport from './components/MySupport';
import MainCompany from './components/MainCompany';
import RegisterVolunteer from './components/RegisterVolunteer';
import RegisterCompany from './components/RegisterCompany';
import './App.css';

class App extends Component{
  render = () => {
    return (
      <div className="App">
        <Router>
            <Route exact path="/" component={CardView} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/MySupport" component={MySupport} />
            <Route path="/MyDonation" component={MyDonation} />
            <Route path="/MainCompany" component={MainCompany} />
            <Route path="/RegisterCompany" component={RegisterCompany} />
            <Route path="/RegisterVolunteer" component={RegisterVolunteer} />
        </Router>
      </div>
    );
  }
}

export default App;
