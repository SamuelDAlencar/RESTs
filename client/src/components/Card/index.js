import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledCard from './style';
import FormattedCurrency from '../FormattedPrice';
import { IoLocationSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';

// Creditos da imagem: https://www.pngwing.com/en/free-png-zytve
import foodIcon from '../../images/food.jpg';
// Creditos da imagem: // Creditos da imagem: https://www.pngwing.com/en/free-png-zytve
import drinkIcon from '../../images/drink.jpg';
// Creditos da imagem: https://flyclipart.com/gps-location-map-pin-pin-restaurant-icon-restaurant-icon-png-237324
import restaurantIcon from '../../images/restaurant.jpg';

export default function Card({ id, name, address, phone, description, price, type }) {
  const navigate = useNavigate();

  return (
    price
      ? (
        <StyledCard
          onClick={() => navigate(`/restaurant/${id}`)}
        >
          <img alt={type === 'food' ? 'Food_icon' : 'Drink_icon'} src={type === 'food' ? foodIcon : drinkIcon} />
          <section>
            <p className='card_name'>{name}</p>
            <p className='card_description'>
              {description}
            </p>
            <FormattedCurrency price={price} />
          </section>
        </StyledCard>)
      : (
        <StyledCard
          onClick={() => navigate(`/restaurant/${id}`)}
        >
          <img alt='Restaurant_icon' src={restaurantIcon} />
          <section>
            <p className='card_name'>{name}</p>
            <p className='card_address'>
              <IoLocationSharp
                className='card_icon'
              />
              {address}
            </p>
            <a className='card_phone'>
              <BsFillTelephoneFill
                className='card_icon'
              />
              {phone}
            </a>
          </section>
        </StyledCard>
      )
  );
}

Card.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  address: PropTypes.string,
  phone: PropTypes.string
};
