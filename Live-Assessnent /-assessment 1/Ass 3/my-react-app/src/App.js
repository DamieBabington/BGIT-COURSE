// App.js

import React, { lazy } from 'react';
import Useridprofile from 'react';

const app = () =>{
  const user{
    name: Beyonce
    Age:37
    location:LA
    imageUrl:'/beyonce.webp'//

  };


  return (
    <div className="app">
      <UserProfileCard user={user} />
    </div>
  );
};

export default App;
