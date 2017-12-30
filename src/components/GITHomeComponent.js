import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeComponent(props) {
  return (
    <div>
      <header id="pageHeader" className="navbar-fixed">
        <nav className="blue">
          <div className="nav-wrapper">
            <Link to="/github" className="brand-logo">
              &nbsp;&nbsp;GITHub Searcher
            </Link>
          </div>
        </nav>
      </header>

      <div className="bgh">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="white-text centerf ">GITHub Searcher</h1>
        <br />
        <Link to="/github" id="download-button" className="bwaves-effect blue waves-light btn-large ">
          Enter
        </Link>
      </div>
      <footer className="page-footer blue">
        <div className="footer-copyright blue">
          <div className="container">© 2017 MC Consulting</div>
        </div>
      </footer>
    </div>
  );
}
