'use strict';

var angular = require('angular');
var alertify = require('alertify');

module.exports = function () {
    var baseUrl = '',
        defaultConfig = {
            cache: false,
            showLoading: true,
            withCredentials: true
        };

    this.baseUrl = function (url) {
        baseUrl = url;
    };

    this.$get = [
        '$http',
        '$q',
        'itaEmbeddedDataService',
        'itaLoadingService',
        function ($http, $q, itaEmbeddedDataService, itaLoadingService) {
            return {
                baseUrl: function () {
                    return baseUrl;
                },

                request: function (config) {
                    config = angular.extend({}, defaultConfig, config);
                    config.url = baseUrl + config.url;

                    if (!config.data) {
                        config.data = {};
                    }

                    if (config.showLoading) {
                        itaLoadingService.showLoading();
                    }

                    return $http(config).then(function(response) {
                        return response.data;
                    }).catch(function(response) {
                        return response;
                    }).finally(function(response) {
                        itaLoadingService.hideLoading();

                        return response;
                    });
                },

                get: function (url) {
                    return this.request({
                        method: 'get',
                        url: url
                    });
                },

                post: function (url, data) {
                    return this.request({
                        method: 'post',
                        url: url,
                        data: data
                    });
                }
            };
        }
    ];
};
