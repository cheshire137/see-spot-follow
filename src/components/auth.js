let LocalStorage = require('stores/localStorage.js');

import React from 'react';
import Router from 'react-router';

class AuthComponent extends React.Component {
  render() {
    var router = this.context.router;
    console.log('params', router.getCurrentParams());
    var token = router.getCurrentParams().token;
    LocalStorage.set('token', token);
    this.transitionTo('spotify');
    return <p></p>;
  }
}

AuthComponent.mixins = [Router.History];

AuthComponent.contextTypes = {router: React.PropTypes.func};

AuthComponent.defaultProps = {
};

export default AuthComponent;
