import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledHeader from './style';
import { IoPersonCircleSharp, IoHome } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';
import HomeContext from '../../context/HomeContext';
import logo from '../../images/logo.jpg';

export default function Header({ username }) {
  const {
    input,
    setInput,
    requestData
  } = useContext(HomeContext);

  const navigate = useNavigate();

  return (
    <StyledHeader>
      <a className='logo_title'>
        {/* Creditos da Logo: https://www.flaticon.com/free-icon/placeholder_1147907 */}
        <img className='logo_jpg' src={logo} />
        Spot
      </a>

      <section className='search_section'>
        <input
          onChange={({ target: { value } }) => setInput(value)}
          value={input}
          placeholder='Pesquise aqui por algum restaurante, prato ou bebida'
        />
        <button
          className='search_button'
          onClick={() => requestData(input)}
        >
          <BsSearch className='search_icon' />
        </button>
      </section>
      <section className='nav_section'>
        <button
          className='nav_button'
          onClick={() => navigate('/login')}
        >
          <h3>
            {username && `Oi ${username} :D`}
          </h3>
          <IoPersonCircleSharp className='nav_icon' />
        </button>
        <button
          className='nav_button'
          onClick={() => navigate('/')}
        >
          <IoHome className='nav_icon' />
        </button>
      </section>
    </StyledHeader>
  );
}
Header.propTypes = {
  username: PropTypes.string.isRequired
};
