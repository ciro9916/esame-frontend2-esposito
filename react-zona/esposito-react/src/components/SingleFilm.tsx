import React from 'react'
import { Link } from 'react-router'
import type { Movie } from '../types'
import '../stile.css'

type TipoRitorno = {
  dato: Movie
}

// url per l'immagine
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

// stile per l'immagine, altrimenti mantiene le dimensioni originali
const posterStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

const SingleFilm = ({ dato }: TipoRitorno) => {
  return (
    // html preso da index.html della traccia, classi prese dal css originale
    <article className="card">
      <div className="card__poster">
        <img
          style={posterStyle}
          src={`${IMAGE_BASE_URL}${dato.poster_path}`}
          alt={dato.title}
        />
      </div>

      <div className="card__body">
        <h2 className="card__title">{dato.title}</h2>
        <p className="card__meta">
          Uscita: {dato.release_date} · Voto: {dato.vote_average}
        </p>
        <p className="card__overview">{dato.overview}</p>

        <Link className="card__cta" to={`/movies/${dato.id}`}>
          Dettaglio
        </Link>
      </div>
    </article>
  )
}

export default SingleFilm