import React from 'react';

import Profile from './profileIntro';
import Gallery from './gallery';

const Home = () => {
   return (
         <div>
            <div className="container-fluid">
               <Profile />
            </div>
            <div className="container">
               <Gallery />
            </div>
         </div>
      );
   }

export default Home;