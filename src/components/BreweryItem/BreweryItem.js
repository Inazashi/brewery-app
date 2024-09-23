import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as outlinedStar } from '@fortawesome/free-regular-svg-icons';
import './BreweryItem.css';

const BreweryItem = ({ brewery, toggleFavorite, isFavorite }) => {
  return (
    <li className='item-link'>
      <Link to={`/brewery/${brewery.id}`}>
        <div className='item-bg' />
        <p class='item-title'>
          {brewery.name}
        </p>
        <div className="item-info">
          <span className="item-address">
            {brewery.city}, {brewery.state}
          </span>
        </div>
      </Link>
      <div className='favorite-button' onClick={(e) => {
        e.stopPropagation()
        toggleFavorite(brewery.id)
      }}>
        <FontAwesomeIcon icon={isFavorite(brewery.id) ? filledStar : outlinedStar} />
      </div>
    </li>
  );
};

export default memo(BreweryItem);
