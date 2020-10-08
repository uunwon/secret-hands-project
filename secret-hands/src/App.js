import React, {Component} from 'react';
import Appbar from './components/Appbar'
import ProfileCardDemo from './components/Card'
import './App.css';

class App extends Component{
  render = () => {
    return (
      <div className="App">
        <Appbar />
        <img src={require('./images/dog-unsplash.jpg')} alt="" width="100%" />
        <ProfileCardDemo />
        <ProfileCardDemo />
      </div>
    );
  }
}

export default App;
