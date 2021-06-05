
import './Home.css';
import axios from 'axios'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Alert,Card,Row,Col } from 'react-bootstrap';

function Home({data}) {



  return (
    <>
    
    <div className="App">
      
      
      {data.map(info => {
        console.log(info.title)
        return (
            <Link to='/info'>
            <Card md bg='dark' 
            border="light"  onClick={()=>{
                console.log('clicked')
                sessionStorage.setItem('id',info.mal_id)
            }}>
             
           
           <Card.Img src={info.image_url}  variant='top' />
           
           <p numberOfLines={1} className='title'> {info.title} </p>
          
           
             <p id='score'> {info.score} </p>
           
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
