import React from 'react';

import GITHeaderComponent from './GITHeaderComponent';

import GITUserDetailComponent from './GITUserDetailComponent';

export default function GITUserDetailPageLayout({ userData = {}, history }) {
  //

  console.log('GIT USER DETAIL LAYOUT.....................');
  //console.log(props);
  console.log(userData);

  let title = 'Details Report';

  return (
    <div className="PageLayout">
      <GITHeaderComponent />

      <GITUserDetailComponent userData={userData} />
    </div>
  );
}
