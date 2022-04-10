import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Hell</Link></h2>
          <p>
            We love games. But more than that we love games that make you want to choose hell in the
            morrning.
          </p>
        </div>
      </header>
      <p> I mean we should have something here
      </p>
    </article>
  </Main>
);

export default Index;
