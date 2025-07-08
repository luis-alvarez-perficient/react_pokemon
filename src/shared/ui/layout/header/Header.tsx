import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="container-header">
      {/* <h1 className="header-title">Header</h1> */}
      {/* <link rel="icon" type="image/svg+xml" href="/pokeball.svg" /> */}
      <img
        className="header-logo"
        src="/pokeball.svg"
        alt="Logo"
        width={"100px"}
        height={"100px"}
      />

      <nav className="header-nav">
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
        <div className="container-nav-item">
          <Link to="/pokemon-detail" className="nav-link">
            Pokemon Detail
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
