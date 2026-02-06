import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const categories = [
    { id: "almacen", label: "Almacén" },
    { id: "lacteos", label: "Lácteos" },
    { id: "fideos", label: "Fideos" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__brandLink">
          <span className="navbar__brand">Lo de Mané</span>
          <span className="navbar__tagline">Almacén & productos frescos</span>
        </Link>
      </div>

      <nav className="navbar__nav">
        <NavLink to="/" className="navbar__link">Inicio</NavLink>
        {categories.map((c) => (
          <NavLink key={c.id} to={`/category/${c.id}`} className="navbar__link">
            {c.label}
          </NavLink>
        ))}
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
