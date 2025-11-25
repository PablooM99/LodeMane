const ItemListContainer = ({ greeting }) => {
    return (
      <main className="item-list-container">
        <h1 className="item-list-container__title">{greeting}</h1>
        <p className="item-list-container__subtitle">
          Muy pronto vas a poder ver el catálogo completo de productos alimenticios de Lo de Mané.
        </p>
      </main>
    );
  };
  
  export default ItemListContainer;
  