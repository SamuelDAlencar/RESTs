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
    color: #404040;
    margin: 0 0 5px;
  }

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  @media only screen and (max-width: 1200px) {
    min-width: 40%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    min-width: 80%;

    img {
      width: 55%;
      border-radius: 10px 0 0 10px;
    }
  }

  @media only screen and (max-width: 320px) {
  }
`;

export default RestCardStyle;
