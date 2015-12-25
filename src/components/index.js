var Config = JSON.parse(require('components/config.json'));

import React from 'react';
import Router from 'react-router';
import LocalStorage from 'stores/localStorage';

class IndexComponent extends React.Component {
  componentWillMount() {
    var token = LocalStorage.get('token');
    if (token) {
      this.transitionTo('spotify');
    }
  }

  constructor(props, context) {
    super(props, context);
    var scopes = 'user-follow-modify user-follow-read';
    this.state = {
      authUrl: 'https://accounts.spotify.com/authorize' +
               '?client_id=' + Config.clientID +
               '&response_type=token' +
               '&redirect_uri=' + encodeURIComponent(Config.redirectUri) +
               '&scope=' + encodeURIComponent(scopes)
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">See Spot Follow</h1>
        <div className="row">
          <div className="col s12 m4">
            <p>
              <a href={this.state.authUrl}>
                Sign in to Spotify
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

IndexComponent.mixins = [Router.History];

IndexComponent.defaultProps = {
};

export default IndexComponent;
