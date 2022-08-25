import styled from 'styled-components';

const HomeStyle = styled.main`
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  .content_section {
    background-color: #f5f5f5;
    height: 89vh;
    width: 80%;
    margin: 0 auto;
    transition: ease-in-out 0.1s;
  }

  .restaurants_section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1200px) {
    .content_section {
      width: 80%;
    }
  }

  @media only screen and (max-width: 768px) {
    .content_section {
      width: 90%;
    }
  }

  @media only screen and (max-width: 320px) {
    .content_section {
      width: 100%;
    }
  }
`;

export default HomeStyle;
