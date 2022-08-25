import styled from 'styled-components';

const CardStyle = styled.section`
  margin: 15px 5px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  max-width: 20%;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
  }
  
  h1 {
    font-size: 140%;
    margin: 5px 0;
    color: #333333;
  }
  
  h4 {
    margin: 5px 0;
    color: #404040;
  }

  img {
    width: 100%;
    border-bottom: 1px solid #e9e2e2;
    border-radius: 10px 10px 0 0;
  }

  @media only screen and (max-width: 1200px) {
    min-width: 30%;
  }

  @media only screen and (max-width: 768px) {
    min-width: 40%;
  }
  
  @media only screen and (max-width: 500px) {
    min-width: 100%;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    border-top: 1px solid #4d4d4d;
    border-radius: 0;
    margin: 0;
  
    img {
      width: 100%;
      border-radius: 10px 0 0 10px;
      border-bottom: 1px solid #e9e2e2;
    }

    h1 {
      font-size: 145%;
    }
  
    h4 {
      font-size: 125%;
    }
  }
`;

export default CardStyle;
