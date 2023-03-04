import React from "react";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItem } from "../reducers/handleCart";

const Products = ({ setWishList, wishList }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);


  const Loading = () => {
    return <div>Loading ......</div>;
  };

  const filterProduct = (c) => {
    const updatedList = data.filter((x) => x.category === c);
    setFilter(updatedList);
    if (c === "favorite") {
      setFilter(wishList);
    }
  };
  const markfav = (id) => {
    let newFilter = filter.map((product) => {
      if (product.id === id) {
        return { ...product, wish: !product.wish };
      }
      return product;
    });
    setFilter(newFilter);
    const fav = newFilter.filter((product) => product.wish);
    setWishList(fav);
  };


  const ShowProducts = () => {
    return (
      <>
        <div className="cat">
          <button
            className="product-cat"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            className="product-cat"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronics
          </button>
          <button
            className="product-cat"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelery
          </button>
          <button
            className="product-cat"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="product-cat"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="product-cat"
            onClick={() => {
              setFilter(wishList);
              // filterProduct("favorite");
            }}
          >
            Favorites
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card  text-center p-4">
                  {product.wish ? (
                    <button
                      id="heartedbtn1"
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        markfav(product.id);
                        //dispatch(markfav(product));
                      }}
                    >
                      <i className="fa fa-heart"></i>
                    </button>
                  ) : (
                    <button
                      id="btn1"
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        markfav(product.id);
                        //dispatch(markfav(product));
                      }}
                    >
                      <i className="far fa-heart"></i>
                    </button>
                  )}
                  <NavLink to={`/products/${product.id}`}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.detail}
                      height="250px"
                    />
                  </NavLink>

                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title}</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>

                    <p>
                      <FaStar />
                      {product.rating.rate}({product.rating.count})
                    </p>
                  
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(addItem(product));
                      }}
                    >
                      {" "}
                      <FaShoppingCart /> <b>Add to Cart</b>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />} <hr />
      </div>
    </div>
  );
};

export default Products;