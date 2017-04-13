'use strict';

var angular = require('angular');

angular.module('ITA.Confirm', [])
    .directive('itaConfirm', require('./ita-confirm-directive'));
