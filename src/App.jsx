import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/Shop/Shop";
import NAv from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './components/Shop/Details';


function App() {
  return (
    <Router>
      <NAv />
      <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/shop/:id" element={<Details/>} />

      </Routes>
    </Router>




  );

}

export default App;
