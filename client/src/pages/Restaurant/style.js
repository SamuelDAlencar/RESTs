import styled from 'styled-components';

const StyledRestaurant = styled.section`
  background-color: white;
  width: 80%;
  margin: 0 auto;
  transition: ease-in-out 0.1s;
  border-radius: 0 0 15px 15px;
  padding: 0 0 30px;

  .restInfo_section {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
  }

  .restInfo_section section {
    display: flex;
    flex-direction: column;
  }

  .restInfo_section section h1 {
    font-size: 350%;
    color: #404040;
    margin-bottom: 20px;
  }

  .restInfo_section section h2 {
    font-size: 150%;
    color: #666666;
    margin: 5px 30px;
  }

  .restInfo_section section h2 span {
    text-decoration: underline;
  }

  .restInfo_section img {
    width: 200px;
    margin: 50px;
  }

  .icon {
    margin-right: 10px;
  }

  .foods_section, .drinks_section {
    margin-top: 50px;
  }

  .foods_section h1:nth-of-type(1), .drinks_section h1:nth-of-type(1) {
    font-size: 250%;
    color: #404040;
    margin: 50px 30px 0;
  }

  .food_list, .drink_list {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    padding: 30px 15px;
  }

  .food_list button, .drink_list button {
  }

  @media only screen and (max-width: 1200px) {
    .restInfo_section section h1 {
      font-size: 320%;
    }

  .restInfo_section section h2 {
      font-size: 120%;
    }
  }

  @media only screen and (max-width: 768px) {
    .restInfo_section img {
      margin: 40px 50px 50px;
    }

    .foods_section h1:nth-of-type(1), .drinks_section h1:nth-of-type(1) {
      font-size: 200%;
      margin: 15px 15px 0;
    }

    .restInfo_section {
      flex-direction: column;
      text-align: center;
    }

    .foods_section, .drinks_section {
      margin: 0;
    }

    .restInfo_section section {
      margin-bottom: 50px;
    }

    .restInfo_section section h1 {
      font-size: 300%;
    }

    .restInfo_section section h2 {
      font-size: 100%;
    }

    .restInfo_section img {
      width: 150px;
    }
  }

  @media only screen and (max-width: 500px) {
    .foods_section h1:nth-of-type(1), .drinks_section h1:nth-of-type(1) {
      margin-top: 30px;
      text-align: center;
    }

    .food_list, .drink_list {
      padding: 30px 0;
    }

    .restInfo_section section h1 {
      font-size: 300%;
    }

    .restInfo_section section h2 {
      font-size: 100%;
    }

    .restInfo_section img {
      width: 150px;
    }
  }
`;

export default StyledRestaurant;
