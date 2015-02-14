'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var SeeSpotFollowApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SeeSpotFollowApp = require('../../../src/scripts/components/SeeSpotFollowApp.js');
    component = React.createElement(SeeSpotFollowApp);
  });

  it('should create a new instance of SeeSpotFollowApp', function () {
    expect(component).toBeDefined();
  });
});
