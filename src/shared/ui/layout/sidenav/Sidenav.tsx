import "./Sidenav.css";

function Sidenav() {
  return (
    <div className="container-sidenav">
      {/* <h1 className="sidenav-title">Sidenav</h1> */}
      <div id="circle-avatar"></div>
      <nav className="sidenav-nav">
        <div className="container-nav-item">
          <a href="/profile" className="nav-link">
            Perfil
          </a>
        </div>
        <div className="container-nav-item">
          <a href="/configuration" className="nav-link">
            Configuración
          </a>
        </div>
        <div className="container-nav-item">
          <a href="/services" className="nav-link">
            Servicios
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Sidenav;
