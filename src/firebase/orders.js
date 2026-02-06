import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

const ordersRef = collection(db, "orders");

export const createOrderFS = async (order) => {
  const docRef = await addDoc(ordersRef, {
    ...order,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};
