import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGridItem.module.css';

const MovieGridItem = ({ movie }) => {
  const { title, posterUrl, overview } = movie;

  return (
    <div className={styles.movieCard}>
      <img src={posterUrl} alt="poster" />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};
MovieGridItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieGridItem;
