import styled from 'styled-components';

const RestCardStyle = styled.section`
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
    margin: 0 0 5px;
    color: #333333;
  }
  
  h4 {
    margin-left: 5px;
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
    flex-direction: row;
    min-width: 80%;

    img {
      width: 55%;
      border-radius: 10px 0 0 10px;
      border-bottom: 0;
      border-right: 1px solid #e9e2e2;
    }
  }

  @media only screen and (max-width: 320px) {
  }
`;

export default RestCardStyle;
