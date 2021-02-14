import { createGlobalStyle } from 'styled-components';
import womanBackground from '../assets/womanBackground.svg';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    color: #383E71, 100%;
    -webkit-font-smoothing: antialiased;
    flex: 1;

    background: url(${womanBackground}) no-repeat top;
    background-image: linear-gradient(0deg, #130525 38%, rgba(105, 57, 153, 0) 100%), url(${womanBackground});
    background-size: contain;

  }
  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
`;
