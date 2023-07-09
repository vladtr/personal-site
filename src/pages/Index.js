import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Vlad Tereshkov's personal website. New York based Stanford ICME graduate, "
    + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            This is my personal web site designed to provide visitors with easy access
            to my resume and other professional information.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>Special thanks to Michael D&apos;Angelo for a wonderful React template, you totally rock!
        Source available <a href="https://github.com/mldangelo/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
