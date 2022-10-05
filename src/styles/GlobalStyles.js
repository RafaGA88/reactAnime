import styled, { createGlobalStyle } from 'styled-components';
import saitama from '../images/saitama.jpg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
    color: #fff;
    background-image: url(${saitama});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
     background-size: cover;
  }

  html, border-style, #root{
    height: 100%;
  }

  button{
    cursor: pointer;
    background: green;
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 10px 20px;
    font-weight: 700;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

`;

export const Container = styled.section`
  max-width: 50%;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 80%);
  justify-content: center;
  display: flex;
`;
