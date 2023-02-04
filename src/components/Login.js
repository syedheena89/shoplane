import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginDetails from "./loginDetails.json";
import { FaSignInAlt} from "react-icons/fa";

const Login = ({userName,setUserName}) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  setUserName(email);
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginDetails.email === email && loginDetails.password === password) {
      alert("login successful");
      navigate("/success", true);
    } else {
      alert("This is invalid access please Login to continue !")
      navigate("/login", true);
      setFormData({  email: "",
      password: ""});
    }
  };

  const clickToSignup = (e) => {
    e.preventDefault();
    navigate("/SignUp", true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <p>Login</p>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            className="login-form input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" id="password-label">
            {" "}
            Password :{" "}
          </label>
          <input
            className="login-form input"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          ></input>
        </div>
        <h6>
          Don't have an account ? SignUp
          <a href="/" onClick={clickToSignup}>
            here
          </a>
        </h6>
        <div className="button-class">
        
          <button type="submit"><FaSignInAlt/>  Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
