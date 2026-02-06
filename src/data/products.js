// src/data/products.js

import yerba from "../assets/products/YerbaPlayadito1.png";
import dulce from "../assets/products/DulceDeLeche.png";
import queso from "../assets/products/QuesoCremac.png";
import fideos from "../assets/products/DonVicente.png";

export const products = [
  {
    id: "1",
    name: "Yerba Mate 1kg",
    category: "almacen",
    price: 4500,
    stock: 15,
    description: "Yerba mate suave, ideal para todos los días.",
    image: yerba,
  },
  {
    id: "2",
    name: "Dulce de Leche 400g",
    category: "almacen",
    price: 2800,
    stock: 20,
    description: "Dulce de leche clásico, cremoso.",
    image: dulce,
  },
  {
    id: "3",
    name: "Queso Cremoso",
    category: "lacteos",
    price: 6500,
    stock: 10,
    description: "Queso cremoso fresco, perfecto para picadas.",
    image: queso,
  },
  {
    id: "4",
    name: "Fideos Tallarines Don Vicente",
    category: "fideos",
    price: 2200,
    stock: 12,
    description: "Fideos Don Vicente.",
    image: fideos,
  },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getProducts = async () => {
  await delay(600);
  return products;
};

export const getProductsByCategory = async (categoryId) => {
  await delay(600);
  return products.filter((p) => p.category === categoryId);
};

export const getProductById = async (itemId) => {
  await delay(600);
  return products.find((p) => p.id === itemId);
};
