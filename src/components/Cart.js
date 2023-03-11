import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItem, deleteItem} from "../reducers/handleCart";

const Cart = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const calculateTotal = () => {
    let total = 0;
    state.forEach((product) => {
      total += product.price * product.qty;
    });
    return total;
  };

  return (
    <>
      <NavLink to="/">Back to Shop</NavLink>
     
      <div className="order-display">
        <div className="item-list">
          {state.map((product) => (
            <div className="title-product">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="product-detail">
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteItem(product));
                  }}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <label>{product.qty}</label>
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addItem(product));
                  }}
                >
                  <i className="fa fa-plus"></i>
                </button>
                <button 
                className="btn"
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteItem(product));
                  }}
                >
                 <i class="fa-sharp fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="container">
          <h4 className="summary"> Order Summary</h4>
          <p>Subtotal:$ {calculateTotal()}</p>
          <p>Shipping Estimate: $5</p>
          <p>Tax Estimate: $5</p>
          <h4>Order Total :$ {calculateTotal() + 10}</h4>
        </div>
      </div>
    </>
  );
};

export default Cart;
