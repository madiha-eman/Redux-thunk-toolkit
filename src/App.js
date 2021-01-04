import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
     
    </div>
  );
}

export default App;
