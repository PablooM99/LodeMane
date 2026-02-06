import { useState } from "react";
import { seedProducts } from "../firebase/seedProducts";

const AdminSeed = () => {
  const [msg, setMsg] = useState("");

  const handleSeed = async () => {
    setMsg("Cargando productos...");
    try {
      const n = await seedProducts();
      setMsg(`✅ Listo: se cargaron ${n} productos en Firestore.`);
    } catch (e) {
      console.error(e);
      setMsg("❌ Error al cargar productos. Mirá la consola.");
    }
  };

  return (
    <main className="page">
      <h1 className="page__title">Seed de productos</h1>
      <button className="card__btn" onClick={handleSeed} type="button">
        Cargar productos en Firestore
      </button>
      {msg && <p style={{ marginTop: 12 }}>{msg}</p>}
      <p style={{ marginTop: 8, color: "#555" }}>
        Ejecutalo una sola vez. Después podés borrar esta página.
      </p>
    </main>
  );
};

export default AdminSeed;
