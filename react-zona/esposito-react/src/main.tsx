import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router'
import Shell from './components/Shell'
import MovieList from './components/MovieList'
import DetailPage from './components/DetailPage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shell />}>
              <Route index element={<MovieList />}/>
              <Route path='/movies/:id' element={<DetailPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
