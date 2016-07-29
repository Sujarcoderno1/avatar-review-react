import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import AllPhotos from './components/photos.jsx';
import NewPhoto from './components/new_photo.jsx';
var api_url = "http://localhost:3000/photos";

var App = React.createClass({ 
	getInitialState() { 
		return { photos: [] } 
	}, 
	// Get Photos
	componentDidMount() { 
		$.getJSON(api_url,(response) => { 
			this.setState({ photos: response }) 
		}); 
	}, 
	// Store photo
	updateImage(image){
		var newPhotos = [image].concat(this.state.photos)
		this.setState({photos: newPhotos});
	},
	// Delete photo
	handleDeleteImage(id){
		var newPhotos = this.state.photos.filter((photo) => {
		 return photo.id != id; 
		});
		this.setState({photos: newPhotos});
	},
	// Rendering to show list of the photos with delete button
	render() { 
		console.log(this.state.photos)
		return ( 
			<div> 
				<NewPhoto handleImage={this.updateImage} />
				<div className="col-md-3">
					<h2 className="list-photos">List of Photos</h2>
				</div>
				<AllPhotos photos = {this.state.photos} handleDelete={this.handleDeleteImage} />
			</div>
		) 
	}
});
export default App;
