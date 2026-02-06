import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./config";

const productsRef = collection(db, "products");

export const getProductsFS = async () => {
  const snap = await getDocs(productsRef);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getProductsByCategoryFS = async (categoryId) => {
  const q = query(productsRef, where("category", "==", categoryId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getProductByIdFS = async (itemId) => {
  const ref = doc(db, "products", itemId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};
