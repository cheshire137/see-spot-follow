require('jquery');
require('materialize-css/sass/materialize.scss');
require('normalize.css');
require('styles/app.scss');
require('materialize-css/js/materialize.js');

import 'core-js/fn/object/assign';
import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import Index from './index';
import Auth from './auth';
import NotFound from './notFound';
import Spotify from './spotify';

var {Route, NotFoundRoute, RouteHandler} = Router;

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

var routes = (
  <Route handler={AppComponent} path="/">
    <Route path="/" component={Index}/>
    <Route name="auth" path="access_token=:token" handler={Auth}/>
    <Route name="spotify" path="spotify" handler={Spotify}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, function(Handler) {
  // if (window.Config.https && window.location.protocol !== 'https:') {
  //   console.log('forcing https');
  //   window.location.href = 'https:' + window.location.href.
  //       substring(window.location.protocol.length);
  //   return;
  // }
  ReactDOM.render(<Handler/>, document.getElementById('app'));
});
