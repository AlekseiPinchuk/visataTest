'use strict';

var domready = require('domready');
var angular = require('angular');

//require common modules
require('./common/ita-embedded-data/ita-embedded-data');
require('./common/ita-request/ita-request');
require('./common/ita-loading/ita-loading');
require('./common/ita-message/ita-message');
require('./common/ita-confirm-delete/ita-confirm-delete');
require('./common/ita-confirm/ita-confirm');
require('./common/ita-form/ita-form');
require('./common/ita-datetime/ita-datetime');

//require project modules
require('./modules/home/home');

domready(function () {
    angular
        .module('PHPLabs', [
            'ui.router',
            'ui.bootstrap',

            'ITA.EmbeddedData',
            'ITA.Request',
            'ITA.Loading',
            'ITA.Message',
            'ITA.ConfirmDelete',
            'ITA.Confirm',
            'ITA.Form',
            'ITA.DateTime',
            'ITA.EmbeddedData',
            'ITA.Request',
            'ITA.Loading',

            'Home'
        ])
        .config([
            'itaEmbeddedDataServiceProvider',
            'itaRequestServiceProvider',
            '$urlRouterProvider',
            '$locationProvider',
            function(itaEmbeddedDataServiceProvider, itaRequestServiceProvider, $urlRouterProvider,
                     $locationProvider) {
                itaEmbeddedDataServiceProvider.init(window.embeddedData);
                itaRequestServiceProvider.baseUrl(window.embeddedData.api.url);

                $urlRouterProvider.otherwise('/404');

                $locationProvider.html5Mode(true);
            }
        ]);

    angular.bootstrap(document, ['PHPLabs']);
});