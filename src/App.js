import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Route';

function App() {
  return (
    <div>
      <Router className="App">
        <Header></Header>
        <Routes></Routes>
      </Router>
    </div>
  );
}
export default App;
