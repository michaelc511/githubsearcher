import getGITUserById from '../../api/getGITUserById';

export default function getGITUserByIdProcess(id) {
  //console.log('getGITUserByIdProcess..............', id);

  return (dispatch, getState, env) => {
    return getGITUserById(id)
      .then(users => {
        //console.log('TEST', users);

        if (users[0].id === 'error') {
          dispatch({ type: 'GIT_USER_ERROR' });

          return users;
        }

        dispatch({ type: 'GET_USER', users });
        return users;
      })
      .catch(error => {
        //console.log('PROCESS ERROR', error);
        dispatch({ type: 'GIT_USER_ERROR' });
      });
  };
}
