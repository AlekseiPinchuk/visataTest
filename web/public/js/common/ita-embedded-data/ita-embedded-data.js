'use strict';

var angular = require('angular');

angular.module('ITA.EmbeddedData', [])
    .provider('itaEmbeddedDataService', require('./ita-embedded-data-service'));
