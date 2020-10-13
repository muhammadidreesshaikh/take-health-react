import React from 'react';
import './App.css';

import Signup from './components/signup/Signup';
import Main from './components/thebasics/Main';
import StepOne from './components/thebasics/StepOne';
import Elligibility from './components/thebasics/Elligibility';

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
              <Route exact path='/main' component={Main}></Route>
              <Route exact path='/stepOne' component={StepOne}></Route>
              <Route exact path='/elligibility' component={Elligibility}></Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
