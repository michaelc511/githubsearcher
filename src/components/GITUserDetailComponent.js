import React from 'react';

/*
// if not defined, show NA
*/

export default function GITUserDetailComponent(props) {
  //  if (!userpref) return null;

  // console.log('GITUserDetailComponent>>>>>>>>>>>>>', props.usersData);
  // console.log('Is Array?', Array.isArray(props.usersData));
  // console.log('Type of ?', typeof props.usersData);
  //
  // console.log('BREAK IT DOWN >>>>>>>>>>>>>');
  //
  // console.log('props.usersData', props.usersData);
  //let user = props.userData[0];
  // console.log('ONE ELEMENT', props.userData[0]); // WORKS FINE
  // console.log('ID OF ONE ELEMENT', props.userData[0].id); // DOES NOT WORK id

  let photourl = '/images/github404.png';

  // if (props.usersData[0].id === 'error') {
  //   console.log('NOT FOUND');
  // }

  if (props.usersData && Array.isArray(props.usersData)) {
    if (props.usersData[0].id === 'not found') {
      return (
        <div className="   BusinessItemDetailComponent">
          <div className="card">
            <div className="card-content">
              <span className="card-title" />User and Repo Not Found
            </div>
            <div className="card-image2">
              <img src={photourl} alt="Nothing" width="800" />
            </div>
          </div>
        </div>
      );
    }

    // Setting up the avatar
    if (props.usersData[0].owner.avatar_url !== 'undefined') {
      photourl = props.usersData[0].owner.avatar_url;
    }

    return (
      <div className="   BusinessItemDetailComponent">
        <div className="card">
          <div className="card-image2">
            <img src={photourl} alt="Nothing" width="300" />
          </div>
          <div className="card-content">
            <span className="card-title" />
            <p />
            <table>
              <tbody>
                <tr>
                  <td width="50%">
                    <b>User id:</b> {props.usersData[0].owner.login}
                  </td>

                  <td width="30%">
                    <b>GITHub URL:</b>{' '}
                    <a href={props.usersData[0].owner.html_url} target="_blank">
                      {props.usersData[0].owner.html_url}
                    </a>
                  </td>
                  <td width="20%" />
                </tr>
                {props.usersData.map(
                  userData => {
                    // //console.log('looping.........................');
                    // //console.log(props.search);
                    return (
                      // <div className="card-content">
                      //   <span className="card-title" />
                      //   <p />
                      //   <table>
                      //     <tbody>
                      <tr key={userData.id}>
                        <td>
                          <b> Repo : </b>
                          <a href={userData.html_url} target="_blank">
                            {userData.full_name}
                          </a>
                        </td>
                        <td>
                          <b> Description : </b>
                          {userData.description}
                        </td>
                        <td>
                          <b> StarGazers : </b>
                          {userData.stargazers_count}
                        </td>
                      </tr>

                      //     </tbody>
                      //   </table>
                      // </div>
                    ); // end of return
                  } //end of function
                ) // end of map
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}
