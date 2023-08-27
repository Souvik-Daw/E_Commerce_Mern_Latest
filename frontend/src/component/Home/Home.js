import React, { Fragment } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";

const Home = () => {

  const product = {
    name: "short",
    images: [{ url: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/t/k/xxs-t653-cgblwh-eyebogler-original-imaghyjv7kppbqxb.jpeg?q=70" }],
    price: "300/-",
    _id: "1"
  }


  return (
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
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>

    </Fragment>
  );
};

export default Home;
