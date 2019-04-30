import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import MoviePage from './MoviePage/MoviePage';
import Reader from './Reader/Reader';

import items from '../publications';
import movies from '../movies';

const App = () => {
  return (
    <div className="app">
      <Reader items={items} />
      <MoviePage movies={movies} />
      <Dashboard />
    </div>
  );
};

export default App;
