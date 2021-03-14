import React, { Suspense } from 'react';

import { Redirect, Route, Switch} from 'react-router-dom';
import Currency from './pages/Currency';
import Home from './pages/Home';
import Tax from './pages/Tax';
import Tip from './pages/Tip';
import Layout from './containers/Layout';

const App = () => {


  let routes = (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/currency" component={Currency} />
          <Route path="/tip" component={Tip} />
          <Route path="/tax" component={Tax} />
          <Redirect to="/" />
        </Switch>
  )

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
  );
};

export default App;
