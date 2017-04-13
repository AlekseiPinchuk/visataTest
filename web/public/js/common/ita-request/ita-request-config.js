'use strict';

module.exports = ['$httpProvider', '$qProvider', function($httpProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';

    $httpProvider.interceptors.push([
        '$q', '$injector',
        function ($q, $injector) {
            return {
                'request': function (config) {
                    // var authService = $injector.get('authService');
                    //
                    // config.headers = config.headers || {};
                    // if (authService.getToken()) {
                    //     config.headers.Authorization = 'Bearer ' + authService.getToken();
                    // }

                    return config;
                },
                'response': function (response) {
                    // var authService = $injector.get('authService');
                    //
                    // var token = '';
                    // var authHeader = response.headers('Authorization');
                    // if (authHeader) {
                    //     token = authHeader.replace('Bearer ', '');
                    // } else if (response.data && response.data.data && response.data.data.token) {
                    //     token = response.data.data.token;
                    // }
                    //
                    // if (token) {
                    //     authService.storeToken(token);
                    // }

                    return response;
                },
                'responseError': function (response) {
                    // var authService = $injector.get('authService');
                    //
                    // if (! response.headers('Authorization')) {
                    //     if (response.status === 400 || response.status === 401) {
                    //         authService.unauthenticate();
                    //     }
                    // }

                    return $q.reject(response);
                }
            };
        }
    ]);
}];
