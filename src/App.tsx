import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './components/Footer';
import { Signup } from './Pages/Signup';
import Signin from './Pages/Signin';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/women' element={<Category banner= {women_banner} category="women"/>}/>
        <Route path = '/men' element={<Category banner= {men_banner} category="men"/>}/>
        <Route path = '/kids' element={<Category banner= {kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/></Route>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/signup' element={<Signup/>}/>
        <Route path = '/signin' element={<Signin/>}/>
      </Routes>
      <Footer />
     </BrowserRouter>
    
    </div>
  );
}

export default App;
