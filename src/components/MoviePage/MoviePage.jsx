import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';
import SearchBar from './SearchBar/SearchBar';
import MovieGrid from './MovieGrid/MovieGrid';

function filterMovies(text, movies) {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(text.toLowerCase()),
  );
}

class MoviePage extends React.Component {
  state = { filter: '' };

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { movies } = this.props;
    const { filter } = this.state;
    const filteredMovies = filterMovies(filter, movies);
    return (
      <div className={styles.container}>
        <SearchBar filter={filter} onChangeFilter={this.filterChange} />
        <MovieGrid movies={filteredMovies} />
      </div>
    );
  }
}
MoviePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MoviePage;
