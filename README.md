# Lo de Mané - E-commerce (React + Firebase)

SPA de e-commerce desarrollada con React. Incluye navegación por catálogo, categorías y detalle, carrito global con Context y checkout con generación de órdenes en Firestore.

## Tecnologías
- React + Vite
- React Router DOM
- Firebase / Firestore

## Funcionalidades
- Listado de productos desde Firestore
- Filtrado por categoría
- Vista de detalle por producto
- Carrito global (Context) con totales y cantidades
- Checkout con creación de orden en Firestore y devolución del ID

## Colecciones en Firestore
### products
Campos sugeridos:
- name (string)
- category (string)
- price (number)
- stock (number)
- description (string)
- image (string URL)

### orders
Se crea al confirmar compra:
- buyer: { name, phone, email }
- items: [{ id, name, price, quantity }]
- total (number)
- createdAt (timestamp)

## Configuración
Crear un archivo `.env` con las variables `VITE_FIREBASE_*` y correr:

```bash
npm install
npm run dev
