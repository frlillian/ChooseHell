import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import Main from '../../layouts/Main';

// const count = markdown.split(/\s+/)
//     .map((s) => s.replace(/\W/g, ''))
//     .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Page = ({ markSource, title, sub }) => (
  <Main
    title={title}
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to={`/${title}`}>{title}</Link></h2>
          <p>{sub}</p>
        </div>
      </header>
      <ReactMarkdown
        source={markSource}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
      <a style={{ margin: '20px 20px 0px 0px' }} href="https://ko-fi.com/choosehell" className="button">Donate</a>
      <a href="/images/HellButton.jpg" className="button" download={`${title}.md`}>Download</a>
    </article>
  </Main>
);

Page.propTypes = {
  markSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};

export default Page;
