'use strict';

var angular = require('angular');

angular.module('ITA.Message', [])
    .factory('itaMessageService', require('./ita-message-service'));
