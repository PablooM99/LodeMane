import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  if (items.length === 0) return <p>No hay productos para mostrar.</p>;

  return (
    <section className="grid">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ItemList;
