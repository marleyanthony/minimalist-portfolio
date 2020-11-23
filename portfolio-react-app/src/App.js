import React from 'react';
import './styles/main.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
   <Router>
     <Route path="/" exact component={Home}/>
     <Route path="/contact" component={Contact}/> 
   </Router>
  );
}

export default App;
