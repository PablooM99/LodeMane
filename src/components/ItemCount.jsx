import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const safeInitial = Math.max(1, Math.min(initial, stock));
  const [count, setCount] = useState(safeInitial);

  const decrement = () => setCount((c) => Math.max(1, c - 1));
  const increment = () => setCount((c) => Math.min(stock, c + 1));

  const add = () => {
    if (stock <= 0) return;
    onAdd(count);
  };

  return (
    <div className="counter">
      <div className="counter__controls">
        <button onClick={decrement} className="counter__btn" type="button">-</button>
        <span className="counter__value">{count}</span>
        <button onClick={increment} className="counter__btn" type="button">+</button>
      </div>

      <button className="counter__add" onClick={add} disabled={stock <= 0} type="button">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
