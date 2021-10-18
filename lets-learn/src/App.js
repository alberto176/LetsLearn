import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Client from './components/pages/Client';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Pictures from './components/pages/Pictures';
import Game from './components/pages/Game';
import ClientsPage from './components/pages/ClientsPage';
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <Router>
      <AuthProvider>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/client' exact component={Client} />

        <Route path='/log-in' exact component={Login} />
        <Route path='/sign-up' exact component={Signup} />
        <Route path='/pictures' exact component={Pictures} />
        <Route path='/game' exact component={Game} />
        <Route path='/clients-page' exact component={ClientsPage} />
      </Switch>
      </AuthProvider>
      
    </Router>
  );
}

export default App;
