import React from 'react'
import { Link } from 'react-router'

const MovieList = () => {
  return (
    <div>MovieList
        <br />
        <Link to={"/movies/"+6}>Prova</Link>
    </div>
  )
}

export default MovieList