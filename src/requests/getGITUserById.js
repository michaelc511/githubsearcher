import env from '../env';
export default function getGITUserById(id) {
  console.log('GETGITUSERBYID FUNC');
  //console.log(env.GIT_API_BASE_URL);
  // //console.log(token);

  return (
    fetch(
      `${env.API_BASE_URL}/rentals/${id}`,
      ///  `${env.GIT_API_BASE_URL}/${id}/repos`,
      {
        // AIRTABLE `https://api.airtable.com/v0/${databaseId}/rentals`, {
        // comment out for APIs
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
      }
    )
      .then(handleErrors)
      .then(response => {
        console.log('GIT USER RESPONSE ', response);
        return response.json();
      })
      // .then(data => {
      // //mc//console.log('THE DATA: ', data);
      //   return data.records.map(record => ({
      //     id: record.id,
      //     address: record.address,
      //     city: record.city,
      //     contactname: record.agentId,
      //     contactinfo: record.agentId,
      //     sqft: record.sqft,
      //     photourl: record.photoUrl,
      //     price: record.price,
      //     description: record.description,
      //     bed: record.bed,
      //     bath: record.bath,
      //     year: record.year,
      //     cooling: record.cooling,
      //     parking: record.parking,
      //     heating: record.heating
      //   }));
      //   //mc//console.log(data);

      // }) // end of then
      .then(rentals => {
        ////mc//console.log('RENTAL IN GETBYID');
        ////mc//console.log(rentals);
        return rentals;
      })
      .catch(function(error) {
        //mc//console.log('error ' + error.message);
        return [{ id: 'error', subject: error.message }];
      })
  );
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    //mc//console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
