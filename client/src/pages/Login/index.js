import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import axiosRequest from '../../helpers/axiosRequest';
import LoginStyle from './style';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [notRegistered, setNotRegistered] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const navigate = useNavigate();

  const verifyEmail = async () => {
    const user = await axiosRequest('POST', {}, {}, `user/email/${email}`);

    user.status === 200 && setEmailConfirmed(true);

    if (user.status === 404) {
      setNotRegistered(true);

      setTimeout(() => {
        setNotRegistered(false);
      }, 1500);
    }

    if (user.status === 400) {
      setInvalidEmail(true);

      setTimeout(() => {
        setInvalidEmail(false);
      }, 1500);
    }
  };

  const login = async () => {
    const user = await axiosRequest('POST', { email, password }, {}, 'user/login');

    user.status === 200 && navigate('/');

    if (user.status === 403) {
      setWrongPassword(true);

      setTimeout(() => {
        setWrongPassword(false);
      }, 1500);
    }

    if (user.status === 400) {
      setInvalidPassword(true);

      setTimeout(() => {
        setInvalidPassword(false);
      }, 1500);
    }
  };

  return (
    <LoginStyle>
      <section>
        {emailConfirmed && (
          <IoIosArrowRoundBack
            className='back_arrow_icon'
            onClick={() => setEmailConfirmed(false)}
          />
        )}
        <h1>( Titulo )</h1>

        {!emailConfirmed ? (
          <>
            <label htmlFor='email'>
              Insira seu e-mail cadastrado
              <input
                id='email'
                value={email}
                placeholder='seu@email.com'
                onChange={({ target: { value } }) => setEmail(value)} />

              {notRegistered && <span>E-mail não registrado, ainda não se cadastrou?</span>}
              {invalidEmail && <span>E-mail inválido</span>}
            </label>
            <button
              onClick={verifyEmail}
              disabled={invalidEmail}
            >
              Continuar
            </button>
          </>
        ) : (
          <>
            <label htmlFor='password'>
              Sua senha
              <input
                type='password'
                id='password'
                value={password}
                placeholder='SuaSenha_123'
                onChange={({ target: { value } }) => setPassword(value)} />

              {wrongPassword && <span>Senha inválida</span>}
              {invalidPassword && <span>Senhas devem possuir no mínimo 6 caractéres</span>}
            </label>
            <button
              onClick={login}
            >
              Entrar
            </button>
          </>)}
      </section>
    </LoginStyle>
  );
}
