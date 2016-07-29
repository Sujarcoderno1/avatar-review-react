import React from 'react';
import ReactDOM from 'react-dom';
var api_url = "http://localhost:3000"

var AllPhotos = React.createClass({
// Deleting photo from rails backend through this ajax
	handleDelete(id){
		$.ajax({ 
			url: 'http://localhost:3000/photos/'+id, 
			type: 'DELETE',
			data: {id: id},
			success: (response) => {
				this.props.handleDelete(id)
			}
		});
	}, 
	// Showing the list of photos with delete button
	render() { 
		var all_photos = this.props.photos;
		var photos = all_photos.map((photo) => { 
		return (
				<div className="row">
					<div className="col-md-12">
						<div className="col-md-6 img-container">
						 	<div> 
						 		<div className="col-md-6">
							 		<img src={api_url+photo.avatar.url} className="img" />
							 	</div>
							 	<div className="col-md-6">
							 		<button className="btn btn-warning delete-btn" onClick={this.handleDelete.bind(this, photo.id)}>Delete</button>
								</div>
							</div>
						</div>
					</div>
				</div>
 			) 
		});
		return ( 
			<div className="photos"> 
				{photos}
			</div>
		) 
	}
});
export default AllPhotos;

