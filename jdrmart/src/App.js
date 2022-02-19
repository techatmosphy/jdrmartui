import logo from './logo.svg';
import './App.css';

import {HashRouter, Route, Link, Routes,BrowserRouter} from "react-router-dom";

import Products from './pages/Products';
import Billing from './pages/Billing';
import Categories from './pages/Cartegories';
import CategoryModalPage1 from './pages/CategoryModalPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/cat" element={<CategoryModalPage1/>}/>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
