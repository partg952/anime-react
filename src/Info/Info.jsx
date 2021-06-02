import React from 'react'
import './Info.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
export default function Info() {
    useEffect(() => {
       async function getData(){
           const id = sessionStorage.getItem('id')
           const response = await axios(`https://api.jikan.moe/v3/anime/${id}`)
           console.log(response.data)
       }
       getData();
   }, [])
    return (
        <div>
            
        </div>
    )
}
