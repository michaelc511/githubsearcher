// 4C
// 1) import the stuff
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
// 2C) import the OrderPage we want to contain
//import Page from '../../components/Page';
import GITUserDetailPageLayout from '../../components/GITUserDetailPageLayout';

// import getByIdProcess from '../thunks/getByIdProcess';
import getGITUserByIdProcess from '../thunks/getGITUserByIdProcess';

// 4C) mapStateToProps function /////////////////////////////////////
function mapStateToProps(state, ownProps) {
  const userData = state.userData;
  console.log('STATE.....', state.userData);

  return {
    userData
  };
}

/////////////////////////////////////
function mapDispatchToProps(dispatch, ownProps) {
  let defaultUser = ownProps.match.params.userId;
  if (ownProps.match.params.userId === 'undefined') {
    defaultUser = 'michaelc511';
  }
  console.log('GITUserDetailPageContainer', defaultUser);
  return {
    onMount: () => dispatch(getGITUserByIdProcess(defaultUser)),

    showRental: rental => {
      let newRental = rental;
      //mc//console.log('DELETE CONTAINER ', rental);
      return dispatch(getGITUserByIdProcess(newRental, true));
    }
  };
}
// 6) connectToStore
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// 7) onDidMount
const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});
// 8) export compose
export default compose(connectToStore, onDidMount)(GITUserDetailPageLayout);
