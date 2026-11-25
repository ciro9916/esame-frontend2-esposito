const API_KEY = import.meta.env.VITE_TMDB_API_KEY
import type {Movie,MovieDetail} from "./types"

export const chiamataApi = async ():Promise<Movie[]> =>{
    const dati = await fetch("https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key="+API_KEY)
    
    const risposta = await dati.json()

    return risposta.results
}

export const chiamataApiDettagli = async (id: string): Promise<MovieDetail> => {
  const dati = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  )

  const risposta = await dati.json()

  return risposta
}

