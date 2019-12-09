import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import Home from './containers/Home/Home';
import Routes from './routes/Route';

function App() {
  return (
    <div>
      <BrowserRouter className="App">
        <Header></Header>
        <Routes></Routes>
        <Home></Home>
      </BrowserRouter>
    </div>
  );
}
export default App;
