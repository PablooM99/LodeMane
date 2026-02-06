import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(
      {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        stock: item.stock,
      },
      qty
    );
    setAdded(true);
  };

  const outOfStock = !item.stock || item.stock <= 0;

  return (
    <section className="detail">
      <img className="detail__img" src={item.image} alt={item.name} />

      <div className="detail__info">
        <h1 className="detail__title">{item.name}</h1>
        <p className="detail__price">${item.price}</p>
        <p className="detail__desc">{item.description}</p>

        {outOfStock ? (
          <p className="badge badge--danger">Producto sin stock</p>
        ) : (
          <p className="badge">Stock: {item.stock}</p>
        )}

        {!outOfStock && !added && (
          <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        )}

        {!outOfStock && added && (
          <div className="afterAdd">
            <p className="badge badge--ok">Producto agregado ✅</p>
            <div className="afterAdd__actions">
              <Link className="card__btn" to="/cart">Ir al carrito</Link>
              <Link className="linkSimple" to="/">Seguir comprando</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ItemDetail;
