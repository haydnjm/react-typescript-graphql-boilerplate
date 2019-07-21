import React, { useEffect, useState } from "react";
import { ApolloProvider } from "react-apollo";
import apolloSetup from "./apolloSetup";
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from './Routes';

const history = createBrowserHistory();

const App = () => {
  const [client, setClient] = useState();

  useEffect(() => setClient(apolloSetup()), []);

  if (!client) return <div>'Loading client...'</div>;

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes history={history}/>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
