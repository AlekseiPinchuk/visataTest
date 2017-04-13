'use strict';

var angular = require('angular');

angular
    .module('ITA.Loading', [])
    .directive('itaLoading', require('./ita-loading-directive'))
    .provider('itaLoadingService', require('./ita-loading-service'));
