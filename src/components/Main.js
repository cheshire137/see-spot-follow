require('jquery');
require('materialize-css/sass/materialize.scss');
require('normalize.css');
require('styles/app.scss');
require('materialize-css/js/materialize.js');
var Config = JSON.parse(require('components/config.json'));

import React from 'react';

class AppComponent extends React.Component {
  render() {
    var clientId = 'b3613e21f98c43f2bcaf4ba917fedacc';
    var scopes = 'user-follow-modify user-follow-read';
    var spotifyAuthUrl = 'https://accounts.spotify.com/authorize' +
                         '?client_id=' + clientId +
                         '&response_type=token' +
                         '&redirect_uri=' + encodeURIComponent(Config.redirectUri) +
                         '&scope=' + encodeURIComponent(scopes);
    return (
      <div className="container">
        <div className="section">
          <h1 className="header">See Spot Follow</h1>
          <div className="row">
            <div className="col s12 m4">
              <p>
                <a href={spotifyAuthUrl}>
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
