import React, { Component } from 'react';
//import routes to navigate around web app
import { HashRouter as Router, Route, Link} from 'react-router-dom';
//import react commponents
import Home from '../Home/Home';
import Edit from '../Edit/Edit';
import Details from '../Details/Details';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>

        {/* Establish Routes to navigate through the app */}
        <Router>
          <Route exact path ="/" component={Home}/>
          <Route path = '/details' component={Details}/>
          <Route path = '/edit' component={Edit}/>
        </Router>
      </div>
    );
  }
}

export default App;
