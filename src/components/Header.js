import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = ({userName}) => {
  const state = useSelector((state)=>state.cart)
  const location = useLocation();
  console.log(location);
 

  return (
    <div className="header">
      <div>
        <h1>
          <span>SHOP</span>LANE
        </h1>
      </div>
      

      {!userName? <div className="dropdown">
        <button className="dropbtn">
          {" "}
          <FaRegUserCircle /> <b>Login</b> or<br></br>SignUp
        </button>
       <div className="dropdown-content">
          <a href="\login">LogIn</a>
          <a href="\signUp">SignUp</a>
        </div>
      </div> :<div><p className="email">{userName}</p>  <NavLink to="/login" className="btn btn-outline-dark">Logout</NavLink> </div>}
      <div className="cart">
        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
          <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
        </NavLink>
      </div>
    </div>
  );
};

export default Header;