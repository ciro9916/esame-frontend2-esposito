import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router' 
import { chiamataApiDettagli } from '../chiamataApi'
import type { MovieDetail } from '../types'
import '../stile.css'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const posterStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

const containerStyle: React.CSSProperties = {
  padding: '10px',
}

const DetailPage = () => {
  const { id } = useParams()
  const [dato, setDato] = useState<MovieDetail>()
  const [errore, setErrore] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const chiamaFunzione = async () => {
      try {
        setErrore(null)
        const risposta = await chiamataApiDettagli(id)
        setDato(risposta)
      } catch (err) {
        setErrore('Impossibile caricare i dettagli del film.')
      }
    }

    chiamaFunzione()
  }, [id])

  if (errore) {
    return (
      <div style={containerStyle}>
        <p>{errore}</p>
        <Link className="back-link" to="/">← Torna all’elenco</Link>
      </div>
    )
  }

  if (!dato) {
    return <p>Caricamento...</p>
  }

  return (
    <div style={containerStyle}>
      <Link className="back-link" to="/">
        ← Torna all’elenco
      </Link>

      <article className="detail">
        <div>
          <div className="detail__poster">
              <img style={posterStyle} src={`${IMAGE_BASE_URL}${dato.poster_path}`} />
          </div>
        </div>

        <div>
          <h1 className="detail__title">{dato.title}</h1>
          <p className="detail__tagline">“{dato.tagline}”</p>

          <ul className="detail__meta">
            <li>Uscita: {dato.release_date}</li>
            <li>Durata: {dato.runtime} min</li>
            <li>Voto: {dato.vote_average}</li>
            <li>Voti: {dato.vote_count}</li>
            <li>Stato: {dato.status}</li>
            <li>Lingua: {dato.original_language.toUpperCase()}</li>
          </ul>

          <div className="detail__genres">
            {dato.genres.map((genere) => (
              <span key={genere.id} className="genre">
                {genere.name}
              </span>
            ))}
          </div>

          <p className="detail__overview-label">Trama</p>
          <p className="detail__overview">
            {dato.overview || 'Nessuna trama disponibile.'}
          </p>

          <p className="card__meta">
              Produzione:
              {dato.production_companies.map((azienda) => azienda.name).join(' · ')}
          </p>
        </div>
      </article>
    </div>
  )
}

export default DetailPage