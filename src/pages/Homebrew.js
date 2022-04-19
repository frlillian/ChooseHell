import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Page from '../components/Template/Page';

// uses babel to load contents of file
const markdown = raw('../data/Homebrew.md');

const Homebrew = () => (
  <Page markSource={markdown} title="5e Homebrew" sub="I wanna kiss" />
);

export default Homebrew;
