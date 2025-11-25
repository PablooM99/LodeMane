import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <span className="navbar__brand">Lo de Mané</span>
        <span className="navbar__tagline">Almacén y productos frescos</span>
      </div>

      <nav className="navbar__nav">
        <a href="#" className="navbar__link">Inicio</a>
        <a href="#" className="navbar__link">Productos</a>
        <a href="#" className="navbar__link">Ofertas</a>
        <a href="#" className="navbar__link">Contacto</a>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
