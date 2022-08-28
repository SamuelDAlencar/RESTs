import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledHeader from './style';
import { IoPersonCircleSharp, IoHome } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';
import HomeContext from '../../context/HomeContext';
import logo from '../../images/logo.jpg';

export default function Header({ home, profile }) {
  const {
    input,
    setInput,
    requestData
  } = useContext(HomeContext);

  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  const navigate = useNavigate();

  return (
    <StyledHeader profile={profile} home={home}>
      <a
        onClick={() => navigate('/')}
        className={'logo_title'}
      >
        {/* Creditos da Logo: https://www.flaticon.com/free-icon/placeholder_1147907 */}
        <img alt='Logo_jpg' className='logo_jpg' src={logo} />
        Spot
      </a>

      {home && (
        <section className='search_section'>
          <input
            onChange={({ target: { value } }) => setInput(value)}
            value={input}
            placeholder='Pesquise aqui por algum restaurante, prato ou bebida'
          />
          <button
            className='search_button'
            onClick={() => requestData(input, true)}
          >
            <BsSearch className='search_icon' />
          </button>
        </section>)}
      <section className={'nav_section'}>
        <button
          className='nav_button'
          onClick={() => navigate('/profile')}
        >
          {user?.username
            ? <p className='username'>{`Oi ${user?.username} :D`}</p>
            : <p className='login_button'>Login</p>
          }
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
  home: PropTypes.bool,
  profile: PropTypes.bool,
};
