import React, { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCarContext";

export const ShoppingCart = () => {
  const [cart, ] = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

    // Función para convertir precios y calcular el total
    const calculateTotalPrice = (cart) => {
      return cart.reduce((acc, curr) => {
        const priceNumeric = parseFloat(curr.price.replace(/\./g, '').replace(',', '.'));
        return acc + curr.quantity * priceNumeric;
      }, 0);
    };

    const totalPrice = calculateTotalPrice(cart);

  return (
    <div className="cart-container">
      <div className="lista-añadidos">
        <div className="tituloPrimarioLista">Productos Añadidos: {quantity}</div>
        <div className="tituloCosto">Total Costo: ${totalPrice.toFixed()}</div> {/*toFixed para mostrar dos decimales*/}
        <button className="botonListar" onClick={() => setShowCart(!showCart)}>Listar</button>
        {showCart && (
          <div className="cart-items">
            <h2 className="tituloLista">lista de productos</h2>
            <ul className="listaItems">
              {cart.map((item, index) => (
                <li key={index}>
                  {item.nameProduct} - Cantidad: {item.quantity} - Precio: ${item.price}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );

  
};

export default ShoppingCart;