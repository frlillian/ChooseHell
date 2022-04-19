import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
// const { height } = window.screen.height;

const Index = () => (
  <Main>
    <section id="intro">
      <div className="logo">
        <a href="#title" type="button" aria-label="test">test</a>
        <img src={`${PUBLIC_URL}/images/HellButton.png`} alt="" />
      </div>
      <article className="post" id="index">
        <header>
          <div id="title" className="title">
            <h2 data-testid="heading"><Link to="/">About Hell</Link></h2>
            <p>
              We love games. But more than that we love games that make you want
              to choose hell in the
              morrning.
            </p>
          </div>
        </header>
        <p> I mean we should have something here
        </p>
      </article>
    </section>
  </Main>
);

export default Index;
