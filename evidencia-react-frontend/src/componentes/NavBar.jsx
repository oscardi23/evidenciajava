import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCarContext";
import Carrito  from "../img/carrito.png"

const Navbar = () => {
  const [cart, ] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <nav>
      <Link to={"/"} style={StyleNav}>
        <h2>Tienda</h2>
      </Link>
     
      <ul className="nav-list">
      
        <Link to={"/cart"} style={StyleNav}>
          
          <li>
          <img className="carrito" src={Carrito} alt="carrito"></img>
            {quantity === 1 ? "añadido" : "Carrito Compras"}{" "}
            <span className="cart-count">{quantity}</span>
          </li>
        </Link>
       
      </ul>
    </nav>
  );
};

const StyleNav = {
  color: "black",
  listStyle: "none",
  textDecoration: "none",
};

export default Navbar;
