import React from 'react';
import Card from '.';
import men from '../data/products_men';
import './CardGrid.css';
import useFetch from '../../hooks/useFetch';
import CONFIG from '../../config';
import { useParams } from 'react-router-dom';
import ProductCarousel from '../Carousel/ProductCarousel';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { useGetProductsByCategoryQuery } from '../app/api';

const CardGrid = () => {
  const {category} = useParams();

  const {data: products, isLoading, error} = useGetProductsByCategoryQuery(category);

  // const {data = [], loading, error} = useFetch(CONFIG.BACKEND_URL + '/products?category=' + category);

  if(isLoading) return (<LoadingScreen />);
  if(error) return (<ErrorScreen />);
  return ( <>
    <ProductCarousel />
    <div className="card-grid">
      {products?.map((product, index) => (
        <Card
          key={product._id}
          index = {index}
          id = {product._id}
          description={product.name}
          image={product.image1}
          price = {product.price}
          category = {product.category}
          // bookmark = {product.favourite}
        />
      ))}
    </div>
      </>
  );
}

export default CardGrid;
