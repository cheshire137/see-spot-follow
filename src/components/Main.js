require('jquery');
require('materialize-css/sass/materialize.scss');
require('normalize.css');
require('styles/App.css');
require('materialize-css/js/materialize.js');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <p>
        <a href="https://accounts.spotify.com/authorize">
          Sign in to Spotify
        </a>
      </p>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
