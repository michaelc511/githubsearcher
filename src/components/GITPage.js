import React from 'react';

import GITPageLayout from './GITPageLayout';

export default function GITPage(props) {
  //
  console.log('2 GITPAGE');
  //console.log('RENTALS: ', props.rentals);
  console.log(props);

  //mc//console.log('IndexPage SELECTED: ' + props.selectedMessageIds);
  return (
    <GITPageLayout
      // mccode
      usersData={props.usersData}
      userData={props.userData}
      showUser={props.showUser}
      showGITReport={props.showGITReport}
      history={props.history}
      search={props.search}
      // mccode
    />
  );
}
