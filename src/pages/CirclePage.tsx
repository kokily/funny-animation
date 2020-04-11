import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Circle from '../components/circle/Circle';

const CirclePage = () => {
  return (
    <>
      <GlobalStyle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
    
    * {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 50%;
    }
  }
`;

export default CirclePage;
