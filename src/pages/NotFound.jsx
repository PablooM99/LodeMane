import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="page">
      <h1 className="page__title">404 - Página no encontrada</h1>
      <p>Ese enlace no existe.</p>
      <Link to="/" className="card__btn">Volver al inicio</Link>
    </main>
  );
};

export default NotFound;
