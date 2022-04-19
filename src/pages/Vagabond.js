import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Page from '../components/Template/Page';

// uses babel to load contents of file
const markdown = raw('../data/Vagabond.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Vagabond = () => (
  <Page markSource={markdown} title="Vagabond" sub="The Sauce" />
);

export default Vagabond;
