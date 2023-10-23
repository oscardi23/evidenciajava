import './App.css';
import logoHero from "./img/logo.png";
import  Navbar  from "./componentes/NavBar";

import ItemsList from "./componentes/itemsList"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ShoppingCar from './componentes/ShoppingCart';
import { ShoppingCartProvider } from './context/ShoppingCarContext';


function App() {
  return (
    
    <div className="App">
      <div className='Barra-principal'>
        <h1> Motocicletas Hero</h1>
        <img
          src={logoHero}
          className='logo'
          alt='logo'
        />  
      </div>
    
    
    <ShoppingCartProvider>

     <Router>
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={ <ItemsList className="contenedor-productos" />} />
          <Route path="/cart" element={ <ShoppingCar />} />
        </Routes>
      </Router>
  
    </ShoppingCartProvider>
    </div>
  );
}

export default App;
