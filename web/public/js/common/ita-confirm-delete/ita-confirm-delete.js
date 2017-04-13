'use strict';

var angular = require('angular');

angular.module('ITA.ConfirmDelete', [])
    .directive('itaConfirmDelete', require('./ita-confirm-delete-directive'));
