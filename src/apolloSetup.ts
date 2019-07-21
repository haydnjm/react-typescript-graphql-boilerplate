import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const devUrl = 'http://localhost:4000/graphql';
const dev = window.location.hostname === 'localhost';

export default () => {

  // Define the cache and persist it immediately
  const cache = new InMemoryCache({});
  
  const httpLink = createHttpLink({
    uri: dev ? devUrl : 'production/staging url here'
  });
  
  const client = new ApolloClient({
    name: 'Typescript, React, Type-GraphQL',
    link: httpLink,
    cache,
    version: '1.0',
  });

  return client;

}