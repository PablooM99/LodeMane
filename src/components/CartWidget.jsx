const CartWidget = () => {
    const itemsInCart = 0;
  
    return (
      <button className="cart-widget">
        <span role="img" aria-label="carrito">
          🛒
        </span>
        <span className="cart-widget__count">{itemsInCart}</span>
      </button>
    );
  };
  
  export default CartWidget;
  