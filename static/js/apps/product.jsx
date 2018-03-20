import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Product = ( {id, imageURL, name, currency, price} ) => (
  
  <div className="productContainer">
      <img src={imageURL} alt=""/>
      <p>{name}</p>
      <p>{currency}{price}</p>
  </div>
)

Product.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Product;