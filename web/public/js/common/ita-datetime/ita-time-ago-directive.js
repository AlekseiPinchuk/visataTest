'use strict';

var moment = require('moment');

module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            date: '='
        },
        template: require('./ita-time-ago.html'),
        link: function (scope) {
            var today = moment();
            var diff = today.diff(moment(scope.date), 'minutes', true);

            if (diff < 10) {
                scope.timeAgo = 'just now';
            } else if (diff < 60) {
                scope.timeAgo = [parseInt(diff, 10), 'm ago'].join('');
            } else if (diff < 60 * 24) {
                scope.timeAgo = [parseInt(diff / 60, 10), 'h ago'].join('');
            } else if (diff < 2 * 60 * 24) {
                scope.timeAgo = 'yesterday';
            } else if (diff < 60 * 24 * 365) {
                scope.timeAgo = [parseInt(diff / (60 * 24), 10), 'd ago'].join('');
            } else {
                scope.timeAgo = [parseInt(diff / (60 * 24 * 365), 10), 'y ago'].join('');
            }
        }
    };
};
