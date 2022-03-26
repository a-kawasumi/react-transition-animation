import React from 'react';
import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-transition-animation';
import 'react-transition-animation/dist/index.css';

// Create a Title component that'll render an <h1> tag with some styles
const keyframesFadeIn = keyframes`${fadeIn}`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  animation: 1s ${keyframesFadeIn};
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const App = () => {
  return (
    <Wrapper>
      {/* eslint-disable-next-line */}
      <Title>React Transition Animation [FadeIn] Example 😄</Title>
    </Wrapper>
  );
};

export default App;
