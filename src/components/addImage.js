import React, { Component } from 'react';

import Profile from './profileIntro';

class AddImage extends Component {
   state = {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5o6MkviI89yORM7gBCol9cZb3E7A7-F8MTRy14wMjz4jElkji"
   }

   componentDidMount() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'http://starlord.hackerearth.com/insta'
      fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(_ => {
         this.setState( prevState => (
            { response: prevState.response.concat(_ )} ));
      });
   }
  
   render() {
      return (
         <div>
            <Profile />
            <div className="container">
               <div className="col-12">
                  <img src = {this.state.image}/>
               </div>
            </div>
         </div>
      );
   }
}

export default AddImage;