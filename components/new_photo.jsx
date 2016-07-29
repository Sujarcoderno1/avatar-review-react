import React from 'react';
import ReactDOM from 'react-dom';

var NewPhoto = React.createClass({ 
  handleImage(image) {
    this.props.handleImage(image)
  },
  // Storing Photo on Rails Backend through this Ajax
	updateAvatar(e) { 
		var file_uploaded = $("#uploadavatarfile")[0].files[0];
    var formd=new FormData();
    formd.append('file', file_uploaded);
    $.ajax({
      url: "http://localhost:3000/photos/",
      type: 'POST',
      dataType: 'json',
      crossDomain: true,
      contentType: false,
      processData: false,
      data: formd,
      context: this,
    }).done(function(resp) {
      this.handleImage(resp)
    });
	},
  // File Choose button for upload the photo
	render() { 
		return ( 
     <div className="col-md-12">
       <h2 className="col-md-2">New Photo</h2>
       <div className="new-button">
          <div className="col-md-2">

            <div className="fileUpload btn btn-primary-2">
                <span>Browse File</span>
                <input type="file" id="uploadavatarfile" className="upload" />
            </div>
            
          </div>
          <div className="col-md-4">
            <button className="btn btn-info" onClick={this.updateAvatar}>Upload</button>
          </div>
       </div>
     </div>
		)
	}
});

export default NewPhoto;