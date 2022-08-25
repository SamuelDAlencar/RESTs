import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 10);
  height: 11vh;
  min-height: 60px;
  background-color: white;
  transition: ease-in-out 0.1s;
  border-bottom: 1px solid #ded4d4;
  
  h1 {
    color: #404040;
    width: 25%;
    padding-left: 1vw;
  }
  
  h3 {
    color: #404040;
  }

  .search_section {
    width: 45%;
    display: flex;
    align-items: center;
    transition: ease-in-out 0.1s;
  }

  input {
    color: #262626;
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
    color: #90B77D;
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

  .nav_section h3 {
    font-size: 140%;
    margin: 0 15px 0;
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
    color: #90B77D;
    font-size: 45px;
    border-radius: 50%;
    transition: ease-in-out 0.2s;
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

    .nav_section h3 {
      display: none;
    }

    .nav_icon {
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 768px) {
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

  @media only screen and (max-width: 320px) {
  }
`;

export default HeaderStyle;
