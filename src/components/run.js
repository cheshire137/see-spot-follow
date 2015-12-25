require('jquery');
require('materialize-css/sass/materialize.scss');
require('normalize.css');
require('styles/app.scss');
require('materialize-css/js/materialize.js');

import 'core-js/fn/object/assign';
import React from 'react';
import {Route, Router, RouteHandler} from 'react-router'
import ReactDOM from 'react-dom';
import Index from './index';
import Auth from './auth';
import NotFound from './notFound';
import Spotify from './spotify';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

ReactDOM.render((
  <Router>
    <Route path="/" component={Index}>
      <Route name="auth" path="access_token=:token" component={Auth}/>
      <Route name="spotify" path="spotify" component={Spotify}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('app'));
