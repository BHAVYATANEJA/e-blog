import Category from "./pages/category";
import Cart from "./pages/cart";
import Home from "./pages/homepage";
import Pagenotfound from "./pages/pgn";
import Login from "./pages/login";
import Signup from "./pages/signup";
import About from "./pages/about";
import Contact from "./pages/contact";
import Policy from "./pages/policy";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<Pagenotfound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Pagenotfound />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
