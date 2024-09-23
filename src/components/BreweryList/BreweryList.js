import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FavoritesContext } from '../../context/FavoritesContext';
import BreweryItem from '../BreweryItem/BreweryItem';
import Spinner from '../Spinner/Spinner';
import './BreweryList.css'

const BreweryList = () => {
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const [breweries, setBreweries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreweries = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`https://api.openbrewerydb.org/v1/breweries?page=${currentPage}&per_page=9`);
        const newBreweries = res.data;
        
        setBreweries((prevBreweries) => {
          const existingIds = new Set(prevBreweries.map((brewery) => brewery.id));
          const filteredBreweries = newBreweries.filter((brewery) => !existingIds.has(brewery.id));
          return [...prevBreweries, ...filteredBreweries];
        });
      } catch (error) {
        window.alert('An error occurred while fetching breweries. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBreweries();
  }, [currentPage]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  

  return (
    <div className='container'>
      <h1>Brewery List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul className='brewery-list'>
        {breweries.map((brewery) => (
          <BreweryItem
            key={brewery.id}
            brewery={brewery}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        ))}
      </ul>
      {loading && <Spinner />}
      {!loading && (
        <div className='load-more-container'>
          <button className='load-more-button' onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default BreweryList;
