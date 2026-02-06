import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../presentation/ItemDetail";
import { getProductByIdFS } from "../firebase/products";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductByIdFS(itemId)
      .then((data) => setItem(data))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return (
      <main className="page">
        <p>Cargando detalle...</p>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="page">
        <h1 className="page__title">Producto no encontrado</h1>
        <p>Revisá el link o volvé al catálogo.</p>
      </main>
    );
  }

  return (
    <main className="page">
      <ItemDetail item={item} />
    </main>
  );
};

export default ItemDetailContainer;
