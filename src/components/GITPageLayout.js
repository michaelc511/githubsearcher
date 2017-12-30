import React from 'react';

//mccode
import GITHeaderComponent from './GITHeaderComponent';
import GITSearchFormComponent from './GITSearchFormComponent';

// user results using
import GITUserDetailComponent from './GITUserDetailComponent';

// show all rentals REMOVE LATER

export default function GITPageLayout(props) {
  //
  console.log('PAGE LAYOUT COMP', props);

  return (
    <div className="PageLayout">
      <GITHeaderComponent />

      <GITSearchFormComponent
        //mccode
        usersData={props.usersData}
        userData={props.userData}
        showUser={props.showUser}
        onShowForm={props.onShowForm} //
        search={props.search}
        history={props.history}
      />
      <GITUserDetailComponent
        usersData={props.usersData} //
      />
    </div>
  );
}
