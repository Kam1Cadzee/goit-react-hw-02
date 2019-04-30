import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ index, length }) => {
  const str = `${index}/${length}`;

  return <p className={styles.counter}>{str}</p>;
};

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
export default Counter;
