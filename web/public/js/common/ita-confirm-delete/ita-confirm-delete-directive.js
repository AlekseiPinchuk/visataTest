'use strict';

module.exports = ['itaMessageService', function (itaMessageService) {
        return {
            restrict: 'A',
            scope: {
                message: '@',
                callback: '&'
            },
            link: function(scope, element) {
                element.on('click', function() {
                    itaMessageService.confirm(scope.message, scope.callback)
                });
            }
        };
    }
];
