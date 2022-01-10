import React from 'react';
import PropTypes from 'prop-types';
import errorImg from 'img/error.png';
import styles from './ErrorSearch.module.css';

export default function ErrorSearch({ message }) {
  return (
    <div className={styles.ErrorWrapper} role="alert">
      <p>{message}</p>
      <img src={errorImg} alt="empty" />
    </div>
  );
}

ErrorSearch.propTypes = {
  message: PropTypes.string.isRequired,
};
