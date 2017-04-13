'use strict';

var angular = require('angular');

angular
    .module('Home', [])
    .config(require('./config'))
    .controller('HomeController', require('./home-ctrl'))
    .provider('homeService', require('./home-service'));