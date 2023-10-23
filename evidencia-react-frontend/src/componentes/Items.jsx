import React, { useContext } from 'react';
import { CartContext } from '../context/ShoppingCarContext';

const Items = ({ id, nameProduct, price, urlImage, quantity }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (itemId) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === itemId)?.quantity === 1) {
        return currItems.filter((item) => item.id !== itemId);
      } else {
        return currItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (itemId) => {
    return cart.find((item) => item.id === itemId)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className='item-box'>
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}
      
      <div className='nombreProducto'>{nameProduct}</div>
      <div className='item-price'>${price}</div>
      <img src={urlImage} alt="" className='img' />
      <div>Stock: {quantity}</div>
      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={addToCart}>
          + Añadir al carrito
        </button>
      ) : (
        <button className="item-plus-button" onClick={addToCart}>
          + Agregar más
        </button>
      )}
      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          Eliminar del carrito
        </button>
      )}
    </div>
  );
};

export default Items;
