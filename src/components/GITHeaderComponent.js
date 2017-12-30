import React from 'react';
import { Link } from 'react-router-dom';

/*
// if not defined, show NA
*/

export default function GITHeaderComponent(props) {
  // function handleEvent(event) {
  //   event.preventDefault();
  //   props.onShowForm();
  // }

  //mc//console.log('HEADERCOMP');
  //mc//console.log(props);
  return (
    <header id="pageHeader" className="navbar-fixed">
      <nav className="blue">
        <div className="nav-wrapper">
          <Link to="/github" className="brand-logo">
            &nbsp;&nbsp;GITHub Searcher
          </Link>
          {/* <ul className="right hide-on-med-and-down">

            <li className="active">
              <Link to="/main">

              </Link>
            </li>

          </ul> */}

          <a href="" data-activates="nav-mobile" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </header>
  );
}
