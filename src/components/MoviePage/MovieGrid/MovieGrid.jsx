import React from 'react';
import styles from './MovieGrid.module.css';
import MovieGridItem from './MovieGridItem/MovieGridItem';

const MovieGrid = ({ movies }) => {
  return (
    movies.length > 0 && (
      <div className={styles.movieGrid}>
        {movies.map(movie => (
          <MovieGridItem key={movie.id} movie={movie} />
        ))}
      </div>
    )
  );
};

export default MovieGrid;
