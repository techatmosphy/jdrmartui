import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Link, Routes,BrowserRouter} from "react-router-dom";


import Category from './components/category/Category';
import Dashboard from './components/category/Dashboard';

function App() {
  return (
    <HashRouter>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
       </Routes>
      </HashRouter>
  );
}

export default App;
