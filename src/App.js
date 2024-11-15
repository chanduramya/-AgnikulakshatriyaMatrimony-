import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/myHome';
import Login from './components/myLogin';
import Register from './components/myRegister';
import Profile from './components/myProfile';
import Dashboard from './components/dashboard'

// import {Search} from './search';
import './App.css';

const App = () => {
  return (
    
    <Router>
      <div className="App">
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          </Routes>
      </div>
    </Router>
   
  );
};

export default App;
