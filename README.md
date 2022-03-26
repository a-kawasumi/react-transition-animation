# react-transition-animation

[![NPM](https://img.shields.io/npm/v/react-transition-animation.svg)](https://www.npmjs.com/package/react-transition-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-transition-animation
```

## Usage

```tsx
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-transition-animation';

const animation = keyframes`${fadeIn}`;
const FadeIn = styled.h1`
  animation: 1s ${animation};
`;

class Example extends Component {
  render() {
    return <FadeIn>FadeIn Example 😄</FadeIn>;
  }
}
```

## License

MIT © [a-kawasumi](https://github.com/a-kawasumi)
