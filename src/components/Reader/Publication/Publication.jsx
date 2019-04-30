import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ item }) => {
  const { text, title } = item;
  return (
    <section className={styles.publication}>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
};
Publication.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default Publication;
