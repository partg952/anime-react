import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Template from './template'
import Info from './Info/Info'
import Navbar from './Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Alert,Card,Row,Col } from 'react-bootstrap';
import Home from './Home/Home'
function App() {

  return (
    <>
    <div>
    <Router>
    <Navbar/>  
    <Route path="/" exact>
    <Home/>
    </Route> 
    <Route path="/info" exact>
      <Info/>
    </Route>
    </Router>
    </div>
      </>
  );
}



export default App;
