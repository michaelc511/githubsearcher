import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './index.css';

// 4C
// 1 ) import { Provider } from 'react-redux';

import { Provider } from 'react-redux';

// 2) Add setUpStore
import setupStore from './redux/setupStore';

// mccode

import GITHomeComponent from './components/GITHomeComponent';
import GITSearchContainer from './redux/containers/GITSearchContainer';
import GITUserDetailPageContainer from './redux/containers/GITUserDetailPageContainer';

// // user   CreateUserContainer
import CreateUserContainer from './redux/containers/CreateUserContainer';
// // login LoginUserContainer
import LoginUserContainer from './redux/containers/LoginUserContainer';

//
import createBrowserHistory from 'history/createBrowserHistory';

import { isEmpty } from './utils/empUtil';
import decode from 'jwt-decode';

const history = createBrowserHistory();

// 4) Set up store
const userName = localStorage.getItem('userName');

function getInitialState(authentication) {
  return isEmpty(authentication)
    ? {
        // authenticatedUser: 0,
        userRole: 'guest_role',
        userName: 'guest_user'
      }
    : {
        // set up the state properies used for login
        // 1 token
        token: authentication.token,
        // 2 user
        authenticatedUser: authentication.user,
        // 3 login as agent
        userRole: 'agent',
        userName: userName
      };
}

const store = setupStore();
// 5 - 6) Remove Process and Components

export default class App extends Component {
  render() {
    return (
      // 4C STUFF
      <div className="App">
        {/* <Provider store={store}> */}
        <Provider store={setupStore(getInitialState(this.props.authentication))}>
          <Router>
            <Switch>
              {/* GITHUB Main Page mccode  */}
              <Route
                exact
                path="/github" //
                history={history}
                component={GITSearchContainer}
              />

              {/*  GITHUB Splash Page  */}
              <Route exact path="/" component={GITHomeComponent} />

              {/* Stand Alone GIT Result Page  Not used at this moment */}
              {/* <Route exact path="/github/user/:userId" component={GITUserDetailPageContainer} /> */}

              {/* Login/Register User to be implemented later for additional feature */}

              {/*  <CreateUser   /> */}
              <Route
                exact
                path="/register" //
                history={history}
                render={props => <CreateUserContainer {...props} />}
              />

              {/*  <Login  /> */}
              <Route
                exact
                path="/login" //
                history={history}
                render={props => <LoginUserContainer {...props} />}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }

  onAddItem() {}
} // end of App Component
