import styled from 'styled-components';
import loginBackground from '../../images/login-background.jpg';

const LoginStyle = styled.main`
  background-image: url(${loginBackground});
  height: 100vh;
  display: flex;
  margin: auto;
  
  section {
    color: white;
    margin-left: 30px;
    background-color: #90B77D;
    width: 35%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Efeito de vidro feito pelo site: https://css.glass */
    background: rgba(72, 56, 56, 0.77);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  .back_arrow_icon {
    position: absolute;
    left: 0;
    font-size: 60px;
    transition: ease-in-out 0.1s;
  }

  .back_arrow_icon:hover {
    cursor: pointer;
    width: 80px;
  }

  h1 {
    font-size: 400%;
    margin: 20%;
  }

  label {
    color: rgba(255, 255, 255, 0.70);
    text-align: center;
    font-size: 150%;
    margin: 10%;
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  input {
    border: 0;
    background-color: white;
    border-radius: 5px;
    border-bottom: 1px solid grey;
    padding: 3%;
    font-size: 100%;
    outline: none;
    transition: ease-in-out 0.1s;
    width: 100%;
    margin-top: 30px;
    color: rgb(50, 50, 50);
  }

  input:focus {
    border-bottom: 5px solid #42855B;
  }

  button {
    margin-top: 100px;
    font-size: 160%;
    width: 80%;
    padding: 20px 80px;
    border: 0;
    border-radius: 7px;
    color: white;
    background-color: #42855B;
    transition: ease-in-out 0.1s;
  }

  button:hover {
    cursor: pointer;
    background-color: #90B77D;
  }
`;

export default LoginStyle;
