import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { addItem } from "../reducers/handleCart";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);
  const Loading = () => {
    return <>Loading....</>;
  };
 
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="300px"
            width="300px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h3>{product.title}</h3>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
        </div>
        <p className="lead">{product.description}</p>
        <div className="product-btn">
          {" "}
          <button
            className="btn btn-outline-dark"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addItem(product));
            }}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div>
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};
export default Product;
