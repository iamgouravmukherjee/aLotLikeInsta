import React, {Component} from 'react';

class Gallery extends Component {
   state = {
      response: [],
      managePosts: true,
      delete: false
   }
   onImageChange = (event) => {
      console.log('response', this.state.response);
      if (event.target.files && event.target.files[0]) {
         console.log('path', window.URL.createObjectURL(event.target.files[0]));
         let arr = [...this.state.response];
         arr.push({
            "Image": window.URL.createObjectURL(event.target.files[0]),
            "likes": 0,
            "timestamp": Date.now()
          });
         console.log(arr);
         this.setState({ response: arr });       
      }
   }
  
   componentDidMount() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'http://starlord.hackerearth.com/insta'
      fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(_ => {
         this.setState( prevState => (
            { response: prevState.response.concat(_)} ));
      });
   }
   showUpload = () => {
      document.getElementById('inputFile').click();
   }

   handleDelete = ( id ) => {
      if(this.state.delete) {
         let response = this.state.response;
         console.log('before', response);
         response = response.filter(obj => obj.timestamp !== id);
         console.log('after', response);
         this.setState({ response });
      } 
   }

   handleDeletePosts = () => {
      const del = this.state.delete;
      this.setState({
         delete: !del
      });
   }

   render() { 
      let imageList = this.state.response;
      imageList = imageList.map(image => {
         return(
            <div 
               key={image.timestamp} 
               className="gallery-item"
               onClick={() => this.handleDelete(image.timestamp)}>
               <img className="gallery-image" src={image.Image} alt="image"/>
            </div>
         );
      });
      return (
         <div>
            <button onClick={this.handleDeletePosts}>Manage</button> (then click on post to delete)
            <div className="gallery">
               {/* <Link to='/addImage'> */}
                  <div className="gallery-item" onClick={this.showUpload}>
                     Add image
                     <input id ="inputFile" type="file" onChange={this.onImageChange}   accept="image/*"/>
                  </div>
               {/* </Link> */}
               {imageList}
            </div>
         </div>
         );
      }
}
export default Gallery;