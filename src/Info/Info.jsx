import React from 'react'
import './Info.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect,useState} from 'react'
import {Image} from 'react-bootstrap'
export default function Info() {
    const [data,setData] = useState([])
   const [genres,setGenres] = useState([])
    
    useEffect(()=>{
        async function getData(){
            console.clear();
            const id = sessionStorage.getItem('id')
             const response = await axios('https://api.jikan.moe/v3/anime/'+id)
             console.log(response.data) 
             setData([response.data])
             setGenres([response.data.genres])
             console.log(genres)
         }
         getData();
    },[])
   
    return (
        <div>
        
          {
              
              data.map(info=>{
                  console.log(info)
                    const {image_url,title,synopsis} = info 
                    const {day,month,year} = info.aired.prop.from
                    const {day_to,month_to,year_to} = info.aired.prop.to
                  return(
                      <div className="main">

                      <div className='first'>
                          <div className='image'>
                        <img src= {image_url} id='cover-image' alt="" draggable='false' />
                          </div>
                          <div className='text'>
                        <h1> {title} </h1>
                        <h3> {info.title_japanese} </h3>
                        <p> {info.rating} </p>
                        <h5>
                            {synopsis}
                        </h5>
                            <h5>{info.aired.string}</h5>
                            <h6>{info.duration}</h6>
                          </div>
                      </div>
                      </div>
                  )
              })
          }
        </div>
    )
}
