import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Cvs from '../pages/Cvs';
import CvNew from '../pages/CvNew';
import CvEdit from '../pages/CvEdit';
import CvDetails from '../pages/CvDetailsContainer';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cvs" component={Cvs} />
          <Route exact path="/cvs/new" component={CvNew} />
          <Route exact path="/cvs/:cvId" component={CvDetails} />
          <Route exact path="/cvs/:cvId/edit" component={CvEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
