
import './Home.css';
import axios from 'axios'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Alert,Card,Row,Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'
function Home() {

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
	const {title,image_url} = info
          setData(item => [...item,info])

        })
	console.log(data)
    }

    getData();
  }, [])

  return (
    <>
    
    <div className="App">
      
      
      {data.map(info => {
        console.log(info.title)
        return (
            <Link to='/info'>
            <Card bg="dark"  onClick={()=>{
                console.log('clicked')
                sessionStorage.setItem('id',info.mal_id)
            }}>
             
           
           <Card.Img src={info.image_url} style={{height:'60%'},{width:'100%'}} variant='top' />
           
           <p> {info.title} </p>
         </Card>
        </Link>
        
          
          

)
})
}
  
    </div>
      </>
  );
}



export default Home;
