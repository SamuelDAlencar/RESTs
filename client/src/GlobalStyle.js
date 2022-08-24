import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('http://fonts.cdnfonts.com/css/gotham');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gotham Black', sans-serif;
    font-weight: 500;
  }

  ::-webkit-input-placeholder {
    font-style: italic;
  }

  :-moz-placeholder {
    font-style: italic;  
  }

  ::-moz-placeholder {
    font-style: italic;  
  }

  :-ms-input-placeholder {  
    font-style: italic; 
  }
`;

export default GlobalStyle;
