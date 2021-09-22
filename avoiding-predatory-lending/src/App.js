import './App.css';
import NavBar from './components/NavBar'
import Main from './components/Main';
import LearningResources from './components/LearningResources';
import Calculator from './components/Calculator';
import Quiz from './components/Quiz';
import Community from './components/Community';
import About from './components/About';

import * as Mui from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Mui.Box>
          <NavBar />
          <Switch>
            <Route path="/Main" component={Main}/>
            <Route path="/LearningResources" component={LearningResources}/>
            <Route path="/Calculator" component={Calculator}/>
            <Route path="/Quiz" component={Quiz}/>
            <Route path="/Community" component={Community}/>
            <Route path="/About" component={About}/>
          </Switch>
        </Mui.Box>
      </Router>
    </div>
  );
}

export default App;
