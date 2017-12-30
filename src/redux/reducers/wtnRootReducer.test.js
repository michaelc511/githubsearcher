import rootReducer from './wtnRootReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

/*
  * To test run 'npm test -- wtnRootReducer.test.js'
  * Review the mock data
  * Tests


  1. CREATE_USER
  2. SHOW_LOGIN_FORM
  3. LOGIN_USER

*/

/*
    ////////////////////////////////////////////////
    1. CREATE_USER
    ////////////////////////////////////////////////
  */
describe('Reducer Test to CREATE_USER', () => {
  // start of test
  it('action.type CREATE_USER', () => {
    const action = {
      type: 'CREATE_USER',
      showUserForm: true
    };

    const currentState = {
      showUserForm: false
    };

    deepFreeze(currentState);

    const nextState = {
      showUserForm: true
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    2. SHOW_LOGIN_FORM
    ////////////////////////////////////////////////
  */
describe('Reducer Test to SHOW_LOGIN_FORM', () => {
  // start of test
  it('action.type SHOW_LOGIN_FORM', () => {
    const action = {
      type: 'SHOW_LOGIN_FORM',
      showLoginForm: true
    };

    const currentState = {
      showLoginForm: false
    };

    deepFreeze(currentState);

    const nextState = {
      showLoginForm: true
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    3. LOGIN_USER
    ////////////////////////////////////////////////
  */
describe('Reducer Test to LOGIN_USER', () => {
  // start of test
  it('action.type LOGIN_USER', () => {
    const action = {
      type: 'LOGIN_USER',
      userRole: 'admin',
      showLoginForm: true
    };

    const currentState = {
      showLoginForm: false,
      userRole: 'guest'
    };

    deepFreeze(currentState);

    const nextState = {
      showLoginForm: true,
      userRole: 'admin'
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////
