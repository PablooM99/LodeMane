import {
    collection,
    doc,
    runTransaction,
    serverTimestamp,
  } from "firebase/firestore";
  import { db } from "./config";
  
  export const createOrderAndDecrementStockFS = async ({ buyer, items, total }) => {
    const ordersRef = collection(db, "orders");
  
    const orderId = await runTransaction(db, async (transaction) => {
      const productsCache = new Map();
  
      for (const item of items) {
        const productRef = doc(db, "products", item.id);
        const snap = await transaction.get(productRef);
  
        if (!snap.exists()) {
          throw new Error(`El producto ${item.id} no existe.`);
        }
  
        const data = snap.data();
        const currentStock = Number(data.stock ?? 0);
  
        if (currentStock < item.quantity) {
          throw new Error(
            `Stock insuficiente para "${data.name}". Disponible: ${currentStock}`
          );
        }
  
        productsCache.set(item.id, { ref: productRef, data });
      }
  
      for (const item of items) {
        const cached = productsCache.get(item.id);
        const currentStock = Number(cached.data.stock ?? 0);
  
        transaction.update(cached.ref, {
          stock: currentStock - item.quantity,
        });
      }
  
      const orderRef = doc(ordersRef);
      transaction.set(orderRef, {
        buyer,
        items,
        total,
        createdAt: serverTimestamp(),
      });
  
      return orderRef.id;
    });
  
    return orderId;
  };
  