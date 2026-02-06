import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <article className="card">
      <div className="card__imgWrapper">
        <img className="card__img" src={item.image} alt={item.name} />
      </div>

      <div className="card__body">
        <h2 className="card__title">{item.name}</h2>
        <p className="card__price">${item.price}</p>
        <p className="card__meta">Categoría: {item.category}</p>

        <Link className="card__btn" to={`/item/${item.id}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
};

export default ItemCard;
