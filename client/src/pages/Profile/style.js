import styled from 'styled-components';

const StyledProfile = styled.main`
  background-color: white;
  width: 80%;
  margin: 0 auto;
  transition: ease-in-out 0.1s;
  border-radius: 0 0 15px 15px;
  padding: 0 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .profile_icon {
    font-size: 2000%;
    color: #483838;
    margin: 50px 0;
  }

  .profile_info {
    margin: 10px 0;
  }

  .profile_info span {
    color: #42855B;
    font-weight: bold;
  }

  .logout_button {
    padding: 10px 100px;
    font-size: 250%;
    border: 0;
    border-radius: 5px;
    color: white;
    background-color: #42855B;
    margin: 80px 0 10px;
    transition: ease-in-out 0.2s;
  }

  .logout_button:hover {
    background-color: #db5858;
    cursor: pointer;
  }
`;

export default StyledProfile;
