import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartView from './screens/CartView';
import Home from './screens/Home';

function App() {

  return (
    <>
    <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/cart" element={<CartView />} />
    </Routes>   
    </>
  );
}

export default App;
