import PropTypes from 'prop-types';
import React from 'react';
import CardStyle from './style';
import FormattedCurrency from '../FormattedPrice';

// Creditos da imagem: https://www.pngwing.com/en/free-png-zytve
import foodIcon from '../../images/food.jpg';
// Creditos da imagem: https://flyclipart.com/gps-location-map-pin-pin-restaurant-icon-restaurant-icon-png-237324
import restaurantIcon from '../../images/restaurant.jpg';

export default function ItemCard({ name, address, phone, description, price }) {
  return (
    price
      ? (
        <CardStyle>
          <img src={foodIcon} />
          <section>
            <h1>{name}</h1>
            <h4>{description}</h4>
            <FormattedCurrency price={price} />
          </section>
        </CardStyle>)
      : (
        <CardStyle>
          <img src={restaurantIcon} />
          <section>
            <h1>{name}</h1>
            <h4>{address}</h4>
            <h4>{phone}</h4>
          </section>
        </CardStyle>
      )
  );
}

ItemCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  address: PropTypes.string,
  phone: PropTypes.string
};
