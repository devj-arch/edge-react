import React from 'react';
import Card from '.';
import men from '../data/products_men';
import './CardGrid.css';
import useFetch from '../../hooks/useFetch';
import CONFIG from '../../config';
import { useParams } from 'react-router-dom';
import ProductCarousel from '../Carousel/ProductCarousel';

const CardGrid = () => {
  const {category} = useParams();

  const {data = [], loading, error} = useFetch(CONFIG.BACKEND_URL + '/products?category=' + category);
  console.log('data: ', data);
  return ( <>
    <ProductCarousel />
    <div className="card-grid">
      {data?.map((product, index) => (
        <Card
          key={product._id}
          index = {index}
          id = {product._id}
          description={product.name}
          image={product.image1}
          price = {product.price}
          categrory = {product.category}
          // bookmark = {product.favourite}
        />
      ))}
    </div>
      </>
  );
}

export default CardGrid;
