import styled from 'styled-components';

const StyledCard = styled.button`
  margin: 15px 8px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  max-width: 20%;
  border: 0;

  section {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    background-color: white;
    border-radius: 0 0 10px 10px;
    height: 100%;
  }
  
  .card_name {
    font-size: 140%;
    margin: 5px 0;
    color: #333333;
  }
  
  .card_description, .card_address {
    margin: 5px 0;
    color: #404040;
  }

  .card_phone {
    margin: 5px 0;
    color: #404040;
    text-decoration: underline;
  }

  .card_icon {
    margin-right: 5px;
  }

  img {
    padding: 15px;
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
    border-bottom: 1px solid #4d4d4d;
    border-radius: 0;
    margin: 0;

    img {
      border-radius: 10px 0 0 10px;
      border-bottom: 1px solid #e9e2e2;
    }

    section {
      align-items: flex-start;
    }

    .card_name{
      font-size: 190%;
    }
  
    .card_address, .card_phone, .card_description {
      font-size: 135%;
    }
  }
`;

export default StyledCard;
