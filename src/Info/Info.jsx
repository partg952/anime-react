import React from 'react'
import './Info.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
export default function Info() {
    const [data,setData] = useState([])
    useEffect(() => {
        console.clear();
       async function getData(){
           const id = sessionStorage.getItem('id')
           const response = await axios(`https://api.jikan.moe/v3/anime/${id}`)
           console.log(response.data)
           setData([response.data])   
       }
       getData();
       console.log(data)
      
   }, [])
    return (
        <div>
          {
              data.map(info=>{
                  console.log(info)
                  
              })
          }
        </div>
    )
}
