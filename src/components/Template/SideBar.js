import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h1>Vlad Tereshkov</h1>
        <h4>(on the right, Dexter is on the left)</h4>
        <br />
        <p>
          <a href="mailto:vlad@tereshkov.com">vlad@tereshkov.com</a>
        </p>
      </header>
    </section>
    <section className="blurb">
      <h2>About</h2>
      <p>
        Experienced Technologist | Inventor | Physicist | Engineering Manager |
        Sr. Software Engineer | 25yrs C++ | AI/ML/NLP | FinTech Innovator<br />
        Proven track record of success in leading and delivering complex software projects.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Vlad Tereshkov | <Link to="/">tereshkov.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
