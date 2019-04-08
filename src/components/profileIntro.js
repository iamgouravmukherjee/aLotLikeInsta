import React from 'react';

const Profile = ( ) => {
   return (
      <div className="jumbotron p-3 p-md-5 d-flex rounded">
         <div className="col d-flex justify-content-center">
            <img className="profileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5o6MkviI89yORM7gBCol9cZb3E7A7-F8MTRy14wMjz4jElkji"/>
         </div>
         <div className="col-8 col-md-8 px-0">
            <h1 className="display-4 name">gouravmukherjee09</h1>
            <p className="lead my-3 interest">Web Development and Machine Learning enthusiast</p>
            <p className="lead mb-0">
               <a href="#" className="font-weight-bold">870</a> posts
            </p>
         </div>
      </div>  
   );
}

export default Profile