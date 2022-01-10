import PropTypes from 'prop-types';

// const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '24123899-30dafe3a116d297502be19e37';
const IMG_TYPE = 'photo';
const IMG_ORIENT = 'horizontal';
const PER_PAGE = 12;

export default async function GetListImg(query, page) {
  const url = `https://pixabay.com/api?image_type=${IMG_TYPE}&orientation=${IMG_ORIENT}&q=${query}&page=${page}&per_page=${PER_PAGE}&key=${API_KEY}`;

  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error('Oops! It is a fail'));
}

GetListImg.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
