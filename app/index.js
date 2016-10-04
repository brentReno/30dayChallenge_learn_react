var React = require('react');
var ReactDOM = require("react-dom");
var routes = require("./config/routes")

ReactDOM.render(
  //can pass in any sort of data [],{}, ""
  routes,
  document.getElementById('app')
);
