import PropTypes from 'prop-types';
import React from 'react';
import RestCardStyle from './style';
import foodIcon from '../../images/restaurant.jpg';

export default function RestaurantCard({ name, address, phone }) {
  return (
    <RestCardStyle>
      <img src={foodIcon} />
      <section>
        <h1>{name}</h1>
        <h4>{address}</h4>
        <h4>{phone}</h4>
      </section>
    </RestCardStyle>
  );
}

RestaurantCard.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
