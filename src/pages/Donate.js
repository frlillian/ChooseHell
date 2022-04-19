import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Donate = () => (
  <Main
    title="Donate"
  >
    <article className="post" id="Donate">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/Donate">Donate</Link></h2>
        </div>
      </header>
      <div>
        <h3>
          Venmo: @ChooseHellGameing
        </h3>
      </div>
    </article>
  </Main>
);

export default Donate;
