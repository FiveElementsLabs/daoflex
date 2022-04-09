import { ChakraProvider } from '@chakra-ui/react';
import { DAppProvider } from '@usedapp/core';
import { ApolloProvider } from '@apollo/client';
import { SharedStateProvider } from './context/store';
import { theme } from '@chakra-ui/react';
import Router from './Router';
import dAppConfig from './lib/dAppConfig';
import client from './lib/apolloClient';

export default function App() {
  return (
    <SharedStateProvider>
      <ChakraProvider theme={theme}>
        <DAppProvider config={dAppConfig}>
          <ApolloProvider client={client}>
            <Router />
          </ApolloProvider>
        </DAppProvider>
      </ChakraProvider>
    </SharedStateProvider>
  );
}
