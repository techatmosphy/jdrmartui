import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Link, Routes,BrowserRouter} from "react-router-dom";

import Products from './pages/Products';
import Billing from './pages/Billing';
import Categories from './pages/Cartegories';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Categories/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/billing" element={<Billing/>}/>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
