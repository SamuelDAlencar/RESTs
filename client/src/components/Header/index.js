import PropTypes from 'prop-types';
import React from 'react';
import HeaderStyle from './style';
import { IoPersonCircleSharp, IoHome } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';

export default function Header({ username }) {
  return (
    <HeaderStyle>
      <h1>(Titulo)</h1>

      <section className='search_section'>
        <input
          placeholder='Pesquise aqui por algum restaurante, prato ou bebida'
        />
        <button className='search_button'>
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
