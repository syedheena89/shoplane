import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import InvalidAccess from "./components/InvalidAccess";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState();
  const [wishList, setWishList] = useState([]);
  return (
    <div className="main-container">
      <Header userName={userName} />

      <div className="components">
        <Routes>
          <Route
            path="/"
            element={<Products wishList={wishList} setWishList={setWishList} />}
          />
          <Route
            path="/login"
            element={<Login userName={userName} setUserName={setUserName} />}
          />
          <Route path="/*" element={<NotFound />} />
          <Route path="/success" element={<Products wishList={wishList} setWishList={setWishList} />} />
          <Route path="/invalidAccess" element={<InvalidAccess />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route exact path="/products/:id" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
