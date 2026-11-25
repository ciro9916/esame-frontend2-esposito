import "../stile.css"
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
          <header className="header">
            <div>
            <div className="header__brand">Movie App</div>
            </div>
            <nav className="header__nav">
            <Link to="/"><a >Home / Elenco</a></Link>
            </nav>
        </header>
    </div>
  )
}

export default Header