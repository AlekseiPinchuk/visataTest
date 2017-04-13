'use strict';

var angular = require('angular');

angular
    .module('ITA.Form', [])
    .directive('itaUrl', require('./validators/ita-url'));
