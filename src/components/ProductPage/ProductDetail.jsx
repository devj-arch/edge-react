import React from "react";
import { useParams } from "react-router-dom";
import men from "../data/products_men"
import Navbar from "../Navbar/Navbar";
import "./ProductDetail.css";
import CONFIG from '../../config';
import useFetch from "../../hooks/useFetch";
import { useAddToCartMutation, useAddToWishlistMutation, useGetProductsByCategoryQuery } from "../app/api";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";


function Detail() {
  const {id, category} = useParams();
  const [addToWishlist, {isLoading: isLoadingWishlist}] = useAddToWishlistMutation();
  const [addToCart, {isLoading: isLoadingCart}] = useAddToCartMutation();

  const { data: products = [], isLoading, error } = useGetProductsByCategoryQuery(category);

  const filterData = products?.find(product => product._id === id) || {};

  const { image1, name, description, price } = filterData;

  if(isLoading) return (<LoadingScreen />);
  if(error) return (<ErrorScreen />);


  const handleAddToWishlist = async () => {
    try {
      await addToWishlist(filterData._id).unwrap();
      // Optionally show a toast or success indicator
      alert("Product added to wishlist succesfully!");
    } catch (err) {
      console.error("Add to wishlist error:", err);
      alert("There was an error adding to wishlist. Pls try again!");
    }
  };

  const handleAddToCart = async () => {
    try {
      await addToCart({ productId: filterData._id, quantity: 1 }).unwrap();
      // Optionally show a toast or success indicator
      alert("Product added to cart succesfully!");
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("There was an error adding to cart. Pls try again!");
    }
  };

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
        <div className="add-to-wishlist add-to-cart">
          <button id="add-to-wishlist" onClick={handleAddToWishlist} disabled={isLoadingWishlist}>{isLoadingWishlist ? 'Adding...' : 'Add to Wishlist'}</button>
          <button id="add-to-cart" onClick={handleAddToCart} disabled={isLoadingCart}>{isLoadingCart ? 'Adding...' : 'Add to Cart'}</button>
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
