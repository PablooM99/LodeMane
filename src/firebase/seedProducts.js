import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";


const seedData = [
  {
    name: "Yerba Playadito 1KG",
    category: "almacen",
    price: 4500,
    stock: 15,
    description: "Yerba mate suave, ideal para todos los días.",
    image: "https://ardiaprod.vtexassets.com/arquivos/ids/320684/Yerba-Mate-Playadito-Suave-1-Kg-_1.jpg?v=638949374251000000",
  },
  {
    name: "Dulce de Leche 400g",
    category: "almacen",
    price: 2800,
    stock: 20,
    description: "Dulce de leche clásico, cremoso de La Serenísima.",
    image: "https://modomarketar.vteximg.com.br/arquivos/ids/162006/Dulce-De-Leche-La-Seren-sima-Cl-sico-X-400-Gr-1-6620.jpg?v=637879777689170000",
  },
  {
    name: "Queso Cremoso Cremac x KG",
    category: "lacteos",
    price: 8500,
    stock: 40,
    description: "Queso cremoso fresco.",
    image: "https://sobreroycagnolo.com/wp-content/uploads/2022/02/Cremoso_Horma_Cremac_01.png",
  },
  {
    name: "Fideos tallarines Don Vicente",
    category: "fideos",
    price: 2200,
    stock: 12,
    description: "Fideos tallarines Don Vicente.",
    image: "https://www.molinos.com.ar/wp-content/uploads/2022/09/Don-vicente-tallarin.webp",
  },
];

export const seedProducts = async () => {
  const ref = collection(db, "products");
  for (const product of seedData) {
    await addDoc(ref, product);
  }
  return seedData.length;
};
