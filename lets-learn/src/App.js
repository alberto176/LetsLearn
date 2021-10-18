import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Client from './components/pages/Client';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import Pictures from './components/pages/Pictures';
import Game from './components/pages/Game';
import ClientsPage from './components/pages/ClientsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/client' exact component={Client} />
        <Route path='/log-in' exact component={LogIn} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/pictures' exact component={Pictures} />
        <Route path='/game' exact component={Game} />
        <Route path='/clients-page' exact component={ClientsPage} />
      </Switch>
    </Router>
  );
}

export default App;
