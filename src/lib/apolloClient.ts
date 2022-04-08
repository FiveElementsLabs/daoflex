import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getAuthenticationToken } from './localStorage';
import config from '../app.config';

const httpLink = createHttpLink({
  uri: config.lens.apiUrl,
});

// This is the authentication middleware
// to inject the Auth header token in every query.
const authLink = setContext((_, { headers }) => {
  const token = getAuthenticationToken();

  return {
    headers: {
      ...headers,
      'x-access-token': token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
