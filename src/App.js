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

  const [data,
    setData] = useState([])
    const [color,setColor] = useState('dark')

  useEffect(() => {
    async function getData() {
      let res = await axios("https://api.jikan.moe/v3/top/anime")
      const {data} = res
      console.log(data)
      data
        .top
        .forEach(info => {
	const {title,image_url} = info
          setData(item => [...item,info])

        })
	console.log(data)
    }

    getData();
  }, [])
  return (
    <>
    <div>
    <Router>
      
    <Route path="/" exact>
    <Navbar/>
    <Home data={data}/>
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
