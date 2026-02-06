import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { createOrderAndDecrementStockFS } from "../firebase/orders";


const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();

  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const isCartEmpty = cart.length === 0;

  const items = useMemo(
    () =>
      cart.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        quantity: p.quantity,
      })),
    [cart]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => ({ ...prev, [name]: value }));
  };

  const canSubmit =
    buyer.name.trim() &&
    buyer.phone.trim() &&
    buyer.email.trim() &&
    !loading &&
    !isCartEmpty;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    try {
      const newOrder = {
        buyer,
        items,
        total: totalPrice,
      };

      const id = await createOrderAndDecrementStockFS(newOrder);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Hubo un error al generar la orden. Probá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <main className="page">
        <h1 className="page__title">¡Compra confirmada! ✅</h1>
        <p>Tu número de orden es:</p>
        <p className="orderId">{orderId}</p>
        <Link to="/" className="card__btn">Volver al catálogo</Link>
      </main>
    );
  }

  if (isCartEmpty) {
    return (
      <main className="page">
        <h1 className="page__title">Checkout</h1>
        <p>No podés finalizar compra con el carrito vacío.</p>
        <Link to="/" className="card__btn">Ir al catálogo</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <h1 className="page__title">Checkout</h1>

      <form className="checkout" onSubmit={handleSubmit}>
        <label>
          Nombre y apellido
          <input name="name" value={buyer.name} onChange={handleChange} />
        </label>

        <label>
          Teléfono
          <input name="phone" value={buyer.phone} onChange={handleChange} />
        </label>

        <label>
          Email
          <input name="email" value={buyer.email} onChange={handleChange} />
        </label>

        <p className="checkout__total">
          Total a pagar: <strong>${totalPrice}</strong>
        </p>

        <button className="card__btn" type="submit" disabled={!canSubmit}>
          {loading ? "Generando orden..." : "Confirmar compra"}
        </button>

        <Link to="/cart" className="linkSimple">Volver al carrito</Link>
      </form>
    </main>
  );
};

export default Checkout;
