import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, category, image, description, price, bookmark }) => {
  return (
    <Link to={`/detail/${category}/${id}`} className='card-link card'>
    {/* <div className="card"> */}
      {image && <img src={image} alt="clothing" className="card-image" />}
      <p className="card-description">{description}</p>
      <div className='lower'>
        <div className='bookmark'>{bookmark ? '✅' : '❌'}</div>
        <div className='price'>₹{price}</div>
      </div>
    {/* </div> */}
    </Link>
  );
};

export default Card;
