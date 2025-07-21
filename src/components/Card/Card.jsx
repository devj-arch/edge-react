import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import BookmarkToggle from './BookmarkToggle';

const Card = ({ id, category, image, description, price, isBookmarked }) => {
  
  return (
    <Link to={`/detail/${category}/${id}`} className='card-link card'>
    {/* <div className="card"> */}
      {image && <img src={image} alt="clothing" className="card-image" />}
      <p className="card-description">{description}</p>
      <div className='lower'>
        {/* <div className='bookmark'>{bookmark ? '✅' : '❌'}</div> */}
        <BookmarkToggle productId={id} initiallyWishlisted={isBookmarked}/>
        <div className='price'>₹{price}</div>
      </div>
    {/* </div> */}
    </Link>
  );
};

export default Card;
