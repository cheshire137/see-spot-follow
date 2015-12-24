require('jquery');
require('materialize-css/sass/materialize.scss');
require('normalize.css');
require('styles/app.scss');
require('materialize-css/js/materialize.js');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <h1 className="header">See Spot Follow</h1>
          <div className="row">
            <div className="col s12 m4">
              <p>
                <a href="https://accounts.spotify.com/authorize">
                  Sign in to Spotify
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
