import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPersonSquare } from 'react-icons/bs';
import Header from '../../components/Header';
import StyledProfile from './style';

export default function Profile() {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');

    navigate('/login');
  };

  useEffect(() => {
    if (!user) navigate('/login');
  }, []);

  return (
    <>
      <Header profile />
      <StyledProfile>
        <BsPersonSquare alt='Profile_pic' className='profile_icon' />
        <h1 className='profile_info'>Nome: <span>{user?.username}</span></h1>
        <h1 className='profile_info'>E-mail: <span>{user?.email}</span></h1>
        <button
          onClick={() => logout()}
          className='logout_button'
        >
          Sair
        </button>
      </StyledProfile>
    </>
  );
}

Profile.propTypes = {
  profile: PropTypes.bool
};
