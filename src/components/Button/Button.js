import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ handleLoadMore }) {
  return (
    <button
      type="button"
      className={styles.Button}
      onClick={() => handleLoadMore()}
    >
      Load more ...
    </button>
  );
}

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
