import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem, updateQuantity } = useCart();

  const subtotal = item.quantity * item.price;

  return (
    <article className="cartItem">
      <img className="cartItem__img" src={item.image} alt={item.name} />

      <div className="cartItem__info">
        <h3 className="cartItem__title">{item.name}</h3>
        <p className="cartItem__price">${item.price}</p>

        <div className="cartItem__qty">
          <label>
            Cantidad:
            <input
              type="number"
              min="1"
              max={item.stock}
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            />
          </label>
          <span className="cartItem__stock">Stock: {item.stock}</span>
        </div>

        <p className="cartItem__subtotal">
          Subtotal: <strong>${subtotal}</strong>
        </p>

        <button className="btnDanger" type="button" onClick={() => removeItem(item.id)}>
          Quitar
        </button>
      </div>
    </article>
  );
};

export default CartItem;
