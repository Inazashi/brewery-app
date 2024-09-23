import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavoritesProvider from './context/FavoritesContext';
import BreweryList from './components/BreweryList/BreweryList';
import Spinner from './components/Spinner/Spinner';

const BreweryDetail = lazy(() => import('./components/BreweryDetail/BreweryDetail'));

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<BreweryList />} />
          <Route
            path="/brewery/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <BreweryDetail />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
