import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { chiamataApi } from '../chiamataApi'
import type {Movie} from "../types"
import SingleFilm from './SingleFilm'


const MovieList = () => {

  const [dati_arr,setDati] = useState<Movie[]>([])
   const chiamaFunzione = async () =>{
      const dati = await chiamataApi()
      setDati(dati)
        
    }
    useEffect(() =>{
        chiamaFunzione()
    },[])

     const posterStyle: React.CSSProperties = {
           padding:"10px"
       }
  return (
    <div style={posterStyle}>
      <h1>Lord of the rings</h1>
      <div className='movie-grid' >
          {dati_arr.map((dato) => (
        <SingleFilm dato={dato}/>
      ))}
      </div>     
    </div>
  )
  
}

export default MovieList