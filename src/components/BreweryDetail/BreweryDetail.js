import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as outlinedStar } from '@fortawesome/free-regular-svg-icons';
import { FavoritesContext } from '../../context/FavoritesContext';
import './BreweryDetail.css';

const BreweryDetail = () => {
  const { id } = useParams();
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const [brewery, setBrewery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBrewery(id);
  }, [id]);

  const fetchBrewery = async (breweryId) => {
    try {
      const res = await axios.get(`https://api.openbrewerydb.org/v1/breweries/${breweryId}`);
      setBrewery(res.data);
    } catch (error) {
      setError('Failed to load brewery details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return <div className='container'>
    <Link to="/" className='back-button'>&lt; Back to list</Link>
    <div className='brewery-detail'>
      <div className='item-bg'/>
      <p className='item-title'>
        {brewery.name}
      </p>
      <div className="item-info">
        <p>Type: <span className='item-type'>{brewery.brewery_type}</span></p>
        <p>Location: <span className='item-address'>{brewery.city}, {brewery.state}</span></p>
        <p>
          Website: 
          <span className='item-website'>
            {brewery.website_url ? (
              <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
                {brewery.website_url}
              </a>
            ) : (
              'N/A'
            )}
          </span>
        </p>
      </div>
      <div className="favorite-button" onClick={() => toggleFavorite(brewery.id)}>
        <FontAwesomeIcon icon={isFavorite(brewery.id) ? filledStar : outlinedStar} />
      </div>
    </div>
  </div>;
};

export default BreweryDetail;
