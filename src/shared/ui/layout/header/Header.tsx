import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="container-header">
      <div className="header-logos">
        <img
          className="logo-pokeball"
          src="/pokeball.svg"
          alt="Logo Pokeball"
          width={"100px"}
          height={"100px"}
        />

        <img
          className="logo-pokemon"
          src="/pokemon-logo.svg"
          alt="Logo Pokemon"
          width={"200px"}
          height={"100px"}
        />
      </div>

      <nav className="container-header-nav">
        <div className="container-nav-item">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
        </div>
        <div className="container-nav-item">
          <Link to="/users" className="nav-link">
            Logout
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
