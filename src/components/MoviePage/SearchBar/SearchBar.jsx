import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ filter, onChangeFilter }) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={onChangeFilter}
    />
  );
};

export default SearchBar;
