import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";

const Home = () => {

  const alert = useAlert();

  const product = {
    name: "short",
    images: [{ url: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/t/k/xxs-t653-cgblwh-eyebogler-original-imaghyjv7kppbqxb.jpeg?q=70" }],
    price: "300/-",
    _id: "1"
  }

  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll Down
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">

            <ProductCard product={product} />


            <div className="container" id="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>

          </div>

        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
