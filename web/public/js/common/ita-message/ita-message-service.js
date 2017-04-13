'use strict';

var alertify = require('alertify');

module.exports = ['$timeout', '$q', '$interval', function($timeout, $q, $interval) {
    return {
        alert: function (message, callback) {
            alertify.alert(message, function() {
                $timeout(function() {
                    callback();
                })
            });
        },
        newAlert: function(message) {
            var deferred = $q.defer();

            alertify.alert(message, function() {
                $timeout(function() {
                    deferred.resolve({
                        foo: 'bar'
                    });
                })
            });

            return deferred.promise;
        },
        confirm: function (message, okCallback, cancelCallback) {
            alertify.confirm(
                message,
                function() {
                    if (okCallback) {
                        $timeout(function() {
                            okCallback();
                        });
                    }
                },
                function() {
                    if (cancelCallback) {
                        $timeout(function() {
                            cancelCallback();
                        });
                    }
                }
            );
        },
        newConfirm: function(message) {
            var deferred = $q.defer();
            var timeToAnswer = 0;
            var intervalPromise;

            alertify.confirm(
                message,
                function() {
                    $interval.cancel(intervalPromise);

                    $timeout(function() {
                        deferred.resolve({
                            foo: 'bar'
                        });
                    });
                },
                function() {
                    $interval.cancel(intervalPromise);

                    $timeout(function() {
                        deferred.reject({
                            foo: 'baz'
                        });
                    });
                }
            );

            intervalPromise = $interval(function() {
                 deferred.notify({
                     progress: timeToAnswer++
                 })
            }, 1000);

            return deferred.promise;
        }
    };
}];
