//import updateMessage from '../../api/updateMessage';
// import deleteMessage from '../../api/deleteMessage';
// import createMessage from '../../api/createMessage';
// import getAllPrefsProcess from '../thunks/getAllPrefsProcess';

// REDUCER
// 1) INITIALIZE VARIABLES FOR THE STATE
// 2) RETURN STATE
export default function wtnRootReducer(
  // console.log("REDUCER");
  currentState = {
    // mccode ////////////////////////////////
    // userData
    usersData: [],
    userData: {},
    //showReport
    showGITReport: false,
    search: {
      keyword: 'all',
      sort: 'all',
      price: 0
    }
    // mccode ////////////////////////////////

    // INITIATE VARIABLES
    // token: null,

    // // login and user creation form
    // showLoginForm: false,
    // showUserForm: false,
    //
    // authenticatedUser: 'guest_user',
    // userRole: 'guest_role',
    // userName: 'guest_user',

    // level: 'admin',
    //

    // loginError: ''
  },
  action
) {
  switch (action.type) {
    // mccode ////////////////////////////////
    case 'LOAD_PAGE':
      return { ...currentState, showGITReport: false };

    case 'GET_RENTAL':
      //mc//console.log('GET_PREFS');
      //mc//console.log(action.rentals);

      //mc//console.log(currentState.search);
      //mc//console.log(resetSearch);

      return { ...currentState, currentRental: action.rental, showForm2: false };

    case 'GET_USER':
      //console.log('REDUCER GET_USER REDUCER .....', action.users);

      return { ...currentState, usersData: action.users };

    case 'GIT_USER_ERROR':
      //console.log('REDUCER GIT_USER_ERROR REDUCER .....', action.users);
      return { ...currentState, usersData: action.users };

    //////////////////////////////
    case 'GET_PREFS':
      //mc//console.log('GET_PREFS');
      //mc//console.log(action.showForm);

      let resetSearch = {
        keyword: 'all',
        sort: 'all',
        price: 0
      };
      //mc//console.log(currentState.search);
      //mc//console.log(resetSearch);

      return { ...currentState, rentals: action.rentals, search: resetSearch, showForm: false };
    // mccode ////////////////////////////////

    case 'CREATE_USER':
      //mc//console.log('CREATE_USER');
      return { ...currentState, showUserForm: action.showUserForm };
    //////////////////////////////////////////////////////////////////////////////////////////
    case 'SHOW_LOGIN_FORM':
      //mc//console.log('SHOW_LOGIN_FORM');

      return { ...currentState, token: action.token, showLoginForm: action.showLoginForm, showUserForm: action.showUserForm };
    case 'LOGOUT':
      //mc//console.log('LOGOUT REDUCER');

      return {
        ...currentState,
        token: action.token,
        authenticatedUser: action.authenticatedUser,
        userRole: action.userRole,
        showLoginForm: action.showLoginForm,
        userName: action.userName
      };

    case 'LOGIN_USER':
      //mc//console.log('LOGIN USER ' + action.token);

      return {
        ...currentState,
        token: action.token,
        authenticatedUser: action.authenticatedUser,
        userRole: action.userRole,
        userName: action.userName,
        showLoginForm: action.showLoginForm
      };

    case 'LOGIN_ERROR':
      //mc//console.log('LOGON ERROR ' + action.loginError);

      return {
        ...currentState,
        loginError: action.loginError
      };

    case 'CREATE_USER_ERROR':
      //mc//console.log('CREATE USER ERROR ' + action.loginError);

      return {
        ...currentState,
        loginError: action.loginError
      };

    case 'LOGIN_RESET':
      //mc//console.log('LOGIN_RESET ERROR ' + action.loginError);

      return {
        ...currentState,
        loginError: action.loginError
      };
    // //////////////////////////////////////////////////////////////////////////////////////////
    //

    default:
      return currentState;
  }
}
