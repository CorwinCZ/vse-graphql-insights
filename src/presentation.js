import React, { Component } from 'react';

import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
  Link,
  Image,
  Code,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

// import demoDevelopmentSpeed from './assets/GitHub-commit-history.png';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022', // Black
    quarternary: '#CECECE', // Gray
    tertiary: '#03A9FC', // Blue
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit textColor="secondary">
            GraphQL in 2018
          </Heading>
          <Text textColor="tertiary" size={1}>
            Petr Čaněk
          </Text>
        </Slide>
      </Deck>
    );
  }
}
