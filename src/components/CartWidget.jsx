import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalUnits } = useCart();

  return (
    <Link to="/cart" className="cart-widget" aria-label="Ir al carrito">
      <span role="img" aria-label="carrito">🛒</span>
      <span className="cart-widget__count">{totalUnits}</span>
    </Link>
  );
};

export default CartWidget;
