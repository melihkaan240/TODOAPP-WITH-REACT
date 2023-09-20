import React from 'react';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
import Main from './components/index';
import css from './global.css';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
