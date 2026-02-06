import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../presentation/CartItem";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <main className="page">
        <h1 className="page__title">Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link to="/" className="card__btn">Ir al catálogo</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <h1 className="page__title">Carrito</h1>

      <section className="cartList">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </section>

      <div className="cartSummary">
        <p className="cartSummary__total">
          Total: <strong>${totalPrice}</strong>
        </p>

        <div className="cartSummary__actions">
          <button className="btnSecondary" type="button" onClick={clearCart}>
            Vaciar carrito
          </button>
          <button className="card__btn" type="button" onClick={() => navigate("/checkout")}>
            Ir a checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
