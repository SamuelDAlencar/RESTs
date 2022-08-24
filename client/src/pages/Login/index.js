import React, { useState } from 'react';
import LoginStyle from './style';
import { IoIosArrowRoundBack } from 'react-icons/io';
// import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailConfirmed, setEmailConfirmed] = useState(false);

  const verifyEmail = () => {
    setEmailConfirmed(true);
  };

  return (
    <LoginStyle>
      <section>
        {emailConfirmed
        && <IoIosArrowRoundBack
          className='back_arrow_icon'
          onClick={ () => setEmailConfirmed(false) }
        />}
        <h1>( Titulo )</h1>

        {!emailConfirmed
          ? (
            <>
              <label htmlFor='email'>
                Insira seu e-mail cadastrado
                <input
                  id='email'
                  value={email}
                  placeholder='seu@email.com'
                  onChange={({ target: { value } }) => setEmail(value)} />
                {/* {!email && <span>E-mail inválido</span>} */}
              </label>
              <button
                onClick={ verifyEmail }
              >
                Continuar
              </button>
            </>
          )
          : (<>
            <label htmlFor='password'>
              Sua senha
              <input
                type='password'
                id='password'
                value={password}
                placeholder='SuaSenha_123'
                onChange={({ target: { value } }) => setPassword(value)} />
            </label><button
              onClick={verifyEmail}
            >
              Entrar
            </button>
          </>)}
      </section>
    </LoginStyle>
  );
}
