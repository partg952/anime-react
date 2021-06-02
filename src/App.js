import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Template from './template'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Alert,Card,Row,Col } from 'react-bootstrap';
function App() {

  const [data,
    setData] = useState([])

  useEffect(() => {
    async function getData() {
      let res = await axios("https://api.jikan.moe/v3/top/anime")
      const {data} = res
      console.log(data)
      data
        .top
        .forEach(info => {
          const {title, image_url} = info

          setData(item => [
            ...item,
            info
          ])

        })
      console.log(data)
    }

    getData();
  }, [])

  return (
    <div className="App">
      
      
      {data.map(info => {
        console.log(info.title)
        return (

         <Card>
           <Card.Img src={info.image_url} style={{height:'60%'},{width:'80%'}}/>
           <Card.Title> {info.title} </Card.Title>
         </Card>

        )
      })
}

    </div>
  );
}

export default App;
