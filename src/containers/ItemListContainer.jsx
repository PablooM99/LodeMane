import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../presentation/ItemList";
import { getProductsFS, getProductsByCategoryFS } from "../firebase/products";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const request = categoryId
      ? getProductsByCategoryFS(categoryId)
      : getProductsFS();

    request
      .then((data) => setItems(data))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <main className="page">
      <h1 className="page__title">{greeting}</h1>

      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </main>
  );
};

export default ItemListContainer;
