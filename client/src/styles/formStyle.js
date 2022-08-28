import styled from 'styled-components';
import loginBackground from '../images/login-background.jpg';

const StyledForm = styled.main`
  background-image: url(${loginBackground});
  background-position: top;
  height: 100vh;
  display: flex;
  margin: auto;
  
  .main_section {
    color: white;
    margin: 0 5vw;
    background-color: #90B77D;
    width: 580px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* Efeito de vidro feito pelo site: https://css.glass */
    background: rgba(72, 56, 56, 0.77);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  .register_title {
    font-size: 350%;
  }

  .register_logo {
    width: 80px;
  }

  .invalid {
    border: 3px solid red !important;
    /* color: red; */
  }

  .back_arrow_icon {
    position: absolute;
    margin: 0 10px;
    left: 0;
    top: 0;
    font-size: 60px;
    transition: ease-in-out 0.1s;
  }

  .back_arrow_icon:hover {
    cursor: pointer;
    width: 80px;
  }

  .logo_jpg {
    width: 150px;
  }

  h1 {
    font-size: 590%;
    font-family: 'Delius Swash Caps', cursive;
  }

  .login_label {
    color: rgba(255, 255, 255, 0.70);
    text-align: center;
    font-size: 150%;
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .register_label_section {
    width: 100%;
  }

  .register_label {
    color: rgba(255, 255, 255, 0.70);
    font-size: 150%;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 30px auto;
  }

  span {
    margin-top: 15px;
    color: #ff8080;
    align-self: flex-start;
    text-align: left;
  }

  .login_input {
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

  .register_input {
    border: 0;
    background-color: white;
    border-radius: 5px;
    border-bottom: 1px solid grey;
    padding: 3%;
    font-size: 100%;
    outline: none;
    transition: ease-in-out 0.1s;
    width: 100%;
    margin-top: 8px;
    color: rgb(50, 50, 50);
  }

  .loginOption {
    color: white;
    text-decoration: underline #42855B;
    transition: ease-in-out 0.1s;
  }

  .loginOption:hover {
    cursor: pointer;
    font-size: 120%;
  }

  input:focus {
    border-bottom: 5px solid #42855B;
  }

  button {
    font-size: 160%;
    width: 100%;
    padding: 20px 80px;
    border: 0;
    border-radius: 7px;
    color: white;
    background-color: #42855B;
    transition: ease-in-out 0.1s;
    font-weight: 700;
    margin: 5px 0;
  }

  button:nth-of-type(2) {
    border: 0;
    background-color: inherit;
    text-decoration: underline #42855B;
    color: white;
    width: fit-content;
    align-self: center;
  }

  button:disabled {
    background-color: #D2D79F;
  }

  button:disabled:hover {
    cursor: not-allowed;
    background-color: #D2D79F;
  }

  button:hover {
    cursor: pointer;
    background-color: #90B77D;
  }

  button:nth-of-type(2):hover {
    background-color: inherit;
  }

  .button_section {
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
`;

export default StyledForm;
