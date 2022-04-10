import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/Fire.jpg`} alt="" />
      </Link>
      <header>
        <h2>Choose Hell</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Just a big dumb website by two big dumb dorks
      </p>
    </section>
  </section>
);

export default SideBar;
