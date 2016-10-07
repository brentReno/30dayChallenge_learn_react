var React = require('react');
var ReactDOM = require("react-dom");
var routes = require("./config/routes");
var Raven= require('raven-js');

var sentryKey ='6aad9cee21b347a1aa42f7d8df613314';
var sentryApp='103733';
var sentryURL='https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO ={
  name:"learn react",
  branch:"master",
  version: "1.0"
};

Raven.config(sentryURL, {
  release:_APP_INFO.version,
  tags:{
    branch: _APP_INFO.branch
  }
}).install();


ReactDOM.render(
  //can pass in any sort of data [],{}, ""
  routes,
  document.getElementById('app')
);
