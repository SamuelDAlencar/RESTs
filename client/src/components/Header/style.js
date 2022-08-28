import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 10);
  height: 11vh;
  min-height: 60px;
  background-color: white;
  transition: ease-in-out 0.1s;
  border-bottom: 2px solid #ded4d4;
  
  .logo_jpg {
    width: 60px;
  }

  .logo_title {
    color: #404040;
    display: flex;
    margin-right: 15%;
    padding-left: 1vw;
    font-family: 'Delius Swash Caps', cursive;
    font-size: 300%;
    transition: ease-in-out 0.1s;
    color: #483838;
  }

  .logo_title:hover {
    cursor: pointer;
  }
  
  .search_section {
    width: 45%;
    display: flex;
    align-items: center;
    transition: ease-in-out 0.1s;
  }

  input {
    color: #404040;
    font-size: 120%;
    padding: 10px;
    height: 50px;
    width: 80%;
    border: 0;
    border-radius: 10px;
    background-color: #f2f2f2;
    outline: none;
    transition: ease-in-out 0.2s;
  }
  
  input:focus {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
    margin: 0 5px 5px 0;
  }

  input:focus::placeholder {
    color: transparent;
  }

  .search_button {
    border: 0;
    border-radius: 10px;
    padding: 5px;
    align-items: center;
    background-color: inherit;
    transition: ease-in-out 0.2s;
  }

  .search_button:hover {
    cursor: pointer;
    font-size: 36px;
  }

  .search_icon {
    font-size: 34px;
    color: #42855B;
    margin-left: 15px;
    transition: ease-in-out 0.2s;
  }

  .nav_section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30%;
    transition: ease-in-out 0.1s;
  }

  h3 {
    font-size: 140%;
    margin: 0 15px 0;
    color: #404040;
  }
  
  .nav_button {
    border: 0;
    border-radius: 10px;
    padding: 5px 10px;
    align-items: center;
    background-color: inherit;
    transition: ease-in-out 0.4s;
    margin: 0 10px;
    display: flex;
  }

  .nav_button:hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }


  .nav_icon {
    color: #42855B;
    font-size: 45px;
    border-radius: 50%;
    transition: ease-in-out 0.2s;
  }

  .login_button {
    color: #42855B;
    font-size: 150%;
    margin-right: 10px;
    text-decoration: underline;
  }

  .username {
    color: #404040;
    font-size: 150%;
    margin-right: 15px;
    font-weight: 700;
    display: ${props => props.profile && 'none'};
  }

  @media only screen and (max-width: 1200px) {
    h1 {
      width: 20%;
    }

    .nav_section {
      width: 20%;
    }

    .search_section {
      width: 60%;
    }

    .search_icon {
      font-size: 30px;
      color: #90B77D;
      margin-left: 5px;
    }

    .login_button, .username {
      display: none;
    }

    .nav_icon {
      font-size: 40px;
    }

    .nav_button {
      margin: 0 5px;
    }
  }

  @media only screen and (max-width: 768px) {
    .login_button, .username {
      display: none;
    }

    .logo_title {
      display: ${props => props.home && 'none'};
    }

    .search_section {
      width: 70%;
    }

    .nav_section {
      width: 30%;
    }

    .nav_button {
      margin: 0;
    }

    .nav_icon {
      font-size: 35px;
    }

    .nav_button {
      margin: 0;
    }

    .search_icon {
      font-size: 25px;
      color: #90B77D;
      margin-left: 5px;
    }

    input {
      height: 40px;
    }

    h1 {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    position: fixed;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #483838;    
    box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 10);

    .logo_title {
      display: ${props => props.home && 'none'};
    }
  }
`;

export default StyledHeader;
