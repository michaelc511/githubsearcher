import React from 'react';
import { Link } from 'react-router-dom';

// For Redirect
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

export default function GITSearchFormComponent(props) {
  // SHOWFORM - MB
  function handleEvent(event) {
    event.preventDefault();

    props.onShowForm();
  }

  // USER SEARCH
  function handleKeyword(event) {
    event.preventDefault();
    const $form = event.target;

    let userName = $form.keyword.value;
    // alert(userName);

    // SEARCH FOR KEYWORD // COMMENT OUT AND USE showUser
    props.showUser(userName);

    //props.history.push('/github/user/' + userName);
  }

  let disabled = '';

  return (
    <div className="row">
      <form id="theForm" className="col s12" onSubmit={handleKeyword}>
        <div className="row">
          <div className="input-field col s3">
            GITHub User Name :<br />
            <input required name="keyword" placeholder="User Search: michaelc511, analuz" id="keyword" type="text" className="validate" />
          </div>

          <div className="input-field col s5">
            <button className="btn waves-effect waves-light blue" type="submit" name="action">
              Search for GITHUB User
              <i className="material-icons right"> </i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
