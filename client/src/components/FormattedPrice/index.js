import PropTypes from 'prop-types';
import React from 'react';
import StyledPrice from './style';

export default function FormattedCurrency({ price }) {
  const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <StyledPrice>
      {formatter.format(price)}
    </StyledPrice>
  );
}

FormattedCurrency.propTypes = {
  price: PropTypes.number.isRequired,
};
