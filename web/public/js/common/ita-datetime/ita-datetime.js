'use strict';

var angular = require('angular');

angular
    .module('ITA.DateTime', [])
    .directive('itaTimeAgo', require('./ita-time-ago-directive'))
    .filter('itaTimeFormat', require('./ita-time-format-filter'));

