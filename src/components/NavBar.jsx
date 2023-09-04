const Navbar = () => {

  const userLogin = JSON.parse(localStorage.getItem("Sesion Usuario"));

  const logOut = () => {
    localStorage.removeItem("Sesion Usuario");
  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Mini Red Social</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex col-12">
            {
              userLogin ?
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/posts">Posteos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Mi Cuenta</a>
                  </li>
                  <li className="nav-item d-flex col-10 justify-content-end">
                    <a className="nav-link" href="/" onClick={logOut}>Cerrar Sesion</a>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">Registrarse</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Iniciar Sesion</a>
                  </li>
                </>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
