import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';
import { SharedStateProvider } from './context/store';
import Router from './Router';

export default function App() {
  return (
    <SharedStateProvider>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </SharedStateProvider>
  );
}
