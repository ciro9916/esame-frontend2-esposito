import React from 'react'
import "../stile.css"

const Header = () => {
  return (
    <div>
          <header className="header">
            <div>
            <div className="header__brand">Movie App</div>
            </div>
            <nav className="header__nav">
            <a href="index.html">Home / Elenco</a>
            </nav>
        </header>
    </div>
  )
}

export default Header