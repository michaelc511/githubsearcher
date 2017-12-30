import env from '../env';
export default function getGITUserById(id) {
  console.log('GETGITUSERBYID FUNC');
  //console.log(env.GIT_API_BASE_URL);
  // //console.log(token);

  return fetch(
    // `${env.API_BASE_URL}/rentals/${id}`,
    `${env.GIT_API_BASE_URL}users/${id}/repos`,
    {}
  )
    .then(handleErrors)
    .then(response => {
      //console.log('GIT USER RESPONSE... ', response);
      return response.json();
    })
    .then(userData => {
      return userData;
    })
    .catch(function(error) {
      //console.log('error ' + error.message);
      return [{ id: 'error', subject: error.message }];
    });
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    //console.log('Handle errors', response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
