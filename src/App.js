import logo from './logo.svg';

import './App.css';
import React from 'react';
import Navbar from './components/NavBar/Navbar'; //se importa automaticamente al llamarlo en el codigo
import ItemList from './components/ItemList/ItemList';
import Welcome from './components/Welcome/Welcome';
import ItemListContainer from './components/ItelListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Details, Tienda, NotFound, Nosotros } from './pages/index';
import { NavLink } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { CartProvider } from './components/CardContext/CardContext';
import Cart from './components/Cart/Cart';

//Si no se importa automaticamente se puede llamar con la estructura import Componente from './ubicacion'

function App() {

  return (
    <>
    <CartProvider>
      <Navbar />
      <Welcome/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:categoriaID" element={<ItemListContainer />} />
          <Route path="/tienda" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/detail/:detailID" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </CartProvider>

    </>
  );
}

export default App;
