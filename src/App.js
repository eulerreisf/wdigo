import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from 'core/graphql';
import Panel from './containers/Panel';

const App = () =>
  <ApolloProvider client={client} >
    <Panel />
  </ApolloProvider >;

export default App;
