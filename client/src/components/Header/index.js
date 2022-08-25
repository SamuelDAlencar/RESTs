import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import HeaderStyle from './style';
import { IoPersonCircleSharp, IoHome } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';
import HomeContext from '../../context/HomeContext';

export default function Header({ username }) {
  const {
    input,
    setInput,
    requestData
  } = useContext(HomeContext);

  return (
    <HeaderStyle>
      <h1>(Titulo)</h1>

      <section className='search_section'>
        <input
          onChange={({ target: { value } }) => setInput(value)}
          value={input}
          placeholder='Pesquise aqui por algum restaurante, prato ou bebida'
        />
        <button
          className='search_button'
          onClick={ () => requestData(input) }
        >
          <BsSearch className='search_icon' />
        </button>
      </section>
      <section className='nav_section'>
        <button className='nav_button'>
          <h3>
            {username && `Oi ${username} :D`}
          </h3>
          <IoPersonCircleSharp className='nav_icon' />
        </button>
        <button className='nav_button'>
          <IoHome className='nav_icon' />
        </button>
      </section>
    </HeaderStyle>
  );
}
Header.propTypes = {
  username: PropTypes.string.isRequired
};
