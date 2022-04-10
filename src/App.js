import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Universities = lazy(() => import('./pages/Universities'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const WarCatan = lazy(() => import('./pages/WarCatan'));
const Valor = lazy(() => import('./pages/Valor'));
const Prodigy = lazy(() => import('./pages/Prodigy'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/Universities" component={Universities} />
        <Route path="/WarCatan" component={WarCatan} />
        <Route path="/Prodigy" component={Prodigy} />
        <Route path="/contact" component={Contact} />
        <Route path="/Valor" component={Valor} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
