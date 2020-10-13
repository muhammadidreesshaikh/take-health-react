import React from 'react';
import './App.css';

import Signup from './components/signup/Signup';

import { 
  BrowserRouter as Router, 
  Route,
  Switch   
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          
          {/* all components */} 
          <div>
            <Switch>
              <Route exact path='/' component={Signup}></Route>
              <Route exact path='/signup' component={Signup}></Route>
            </Switch>
          </div>

      </div>
    </Router>
  );
}

export default App;
