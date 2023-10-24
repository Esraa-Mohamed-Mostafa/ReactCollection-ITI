import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/Shop/Shop";
import NAv from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './components/Shop/Details';
import Count from './components/Count/Count';
import Products from './Hook/Products';
import Signin from './components/Forms/Signin';
import Register from './components/Forms/Register';


function App() {
  return (
    <Router>
      <NAv />
      <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/shop/:id" element={<Details/>} />
      <Route path="/count" element={<Count/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/register" element={<Register/>} />




      </Routes>
    </Router>




  );

}

export default App;
