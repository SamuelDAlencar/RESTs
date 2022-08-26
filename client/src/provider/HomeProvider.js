import PropTypes from 'prop-types';
import React, { useState } from 'react';
import HomeContext from '../context/HomeContext';
import axiosRequest from '../helpers/axiosRequest';

export default function HomeProvider({ children }) {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [input, setInput] = useState('');
  const [searchedBy, setSearchedBy] = useState('');
  const [results, setResults] = useState();
  const [filterBy, setFilterBy] = useState('restaurant');

  const requestData = async (query, search) => {
    const response = query
      ? await axiosRequest('GET', {}, {
        authorization: user.token
      }, `${filterBy}/?name=${query}&description=${query}`)

      : await axiosRequest('GET', {}, {
        authorization: user.token
      }, `${filterBy}/all`);

    setResults(response.data);

    setSearchedBy(input);
    search && setInput('');
  };

  return (
    <HomeContext.Provider
      value={{
        user,
        requestData,
        results,
        setResults,
        input,
        setInput,
        searchedBy,
        setSearchedBy,
        filterBy,
        setFilterBy,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

HomeProvider.propTypes = {
  children: PropTypes.any
};
