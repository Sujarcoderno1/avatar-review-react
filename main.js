import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import App from './App.jsx';
import AllPhotos from './components/photos.jsx';
import NewPhoto from './components/new_photo.jsx';

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
      </Route>
   </Router>
), document.getElementById('app'))