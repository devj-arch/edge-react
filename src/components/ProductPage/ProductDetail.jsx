import React from "react";
import { useParams } from "react-router-dom";
import men from "../data/products_men"
import Navbar from "../Navbar/Navbar";
import "./ProductDetail.css";
import CONFIG from '../../config';
import useFetch from "../../hooks/useFetch";


function Detail() {
  const {data = [], loading, error} = useFetch(CONFIG.BACKEND_URL + '/products?category=M');

  const {id} = useParams();

  const filterData = data?.find(product => product._id === id) || {};

  const { image1, name, description, price} = filterData;


  return (
    <div className="detail-page">
      <div className="image-carousel">
        <img src={image1} alt={name}></img>
      </div>
      <div className="product-detail">
        <h1>{name}</h1>
        <div className="amount">
          <div className="offer">47% OFF</div>
          <div className="price">₹{price}</div>
        </div>
        <div className="size">

            <button id="s">S</button>
            <button id="m">M</button>
            <button id="l">L</button>
            <button id="xl">XL</button>
            <button id="xxl">XXL</button>

        </div>
        <div className="save add-to-cart">
          <button id="save">Save</button>
          <button id="add-to-cart">Add to Cart</button>
        </div>
        <div className="more-detail">
          <h2>Product Description:</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail;
