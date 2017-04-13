'use strict';

var angular = require('angular');

angular.module('ITA.Request', [])
    .provider('itaRequestService', require('./ita-request-service'))
    .config(require('./ita-request-config'));
