import React, { useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import StyledForm from '../../styles/formStyle';
import logo from '../../images/logo.jpg';
import cacheUser from '../../helpers/cacheUser';
import axiosRequest from '../../helpers/axiosRequest';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidFields, setInvalidFields] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  const register = async () => {
    const user = await axiosRequest('POST', { username, email, password }, {}, 'user/register');

    if (user.status === 201) {
      cacheUser(user.data);

      navigate('/');
    }

    if (user.status === 409) {
      setUserExists(true);

      setTimeout(() => {
        setUserExists(false);
      }, 5000);
    }

    if (user.status === 400) {
      setInvalidFields(true);

      setTimeout(() => {
        setInvalidFields(false);
      }, 5000);
    }
  };

  return (
    <StyledForm>
      <section className='main_section'>
        <IoIosArrowRoundBack
          className='back_arrow_icon'
          onClick={() => navigate('/login')}
        />
        <h1>
          {/* Creditos da Logo: https://www.flaticon.com/free-icon/placeholder_1147907 */}
          <img className='logo_jpg' src={logo} />
          Spot
        </h1>
        <section className='register_label_section'>
          <label className='register_label' htmlFor='email'>
            Seu nome de usuário
            <input
              className='register_input'
              id='username'
              value={username}
              placeholder='Seu_Nome de-usuario'
              onChange={({ target: { value } }) => setUsername(value)} />
          </label>
          <label className='register_label' htmlFor='email'>
            Insira o e-mail que deseja utilizar
            <input
              className='register_input'
              id='email'
              value={email}
              placeholder='seu@email.com'
              onChange={({ target: { value } }) => setEmail(value)} />
          </label>
          <label className='register_label' htmlFor='password'>
            Senha de acesso
            <input
              className='register_input'
              id='password'
              value={password}
              placeholder='sua_senha_123_secreta'
              onChange={({ target: { value } }) => setPassword(value)} />
            {invalidFields && <span>O nome de usuário deve conter no mínimo 3 caracteres, e a senha conter no mínimo 6 caracteres</span>}
            {userExists && <span>Este e-mail já foi cadastrado, deseja fazer
              {' '}
              <a
                className='loginOption'
                onClick={() => navigate('/login')}>
                login
              </a>?
            </span>}
          </label>
        </section>
        <section className='button_section'>
          <button
            onClick={register}
          >
            Realizar Cadastro
          </button>
        </section>
      </section>
    </StyledForm>
  );
}