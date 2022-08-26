import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import HomeContext from '../../context/HomeContext';

export default function FilterButton({ id }) {
  const {
    setResults,
    filterBy,
    setFilterBy,
    setSearchedBy
  } = useContext(HomeContext);

  const buttonFilter = ({ target }) => {
    setResults();

    if (target.id === 'restaurant') {
      setFilterBy('restaurant');
    } else {
      setFilterBy('item');
    }

    setSearchedBy('');
  };

  return (
    <button
      className={id === filterBy
        ? 'active_filter_button'
        : 'inactive_filter_button'
      }
      onClick={(event) => buttonFilter(event)}
      id={id}
    >
      {id === 'restaurant' ? 'Restaurantes' : 'Itens'}
    </button>
  );
}

FilterButton.propTypes = {
  filter: PropTypes.string,
  handler: PropTypes.func,
  id: PropTypes.string
};
