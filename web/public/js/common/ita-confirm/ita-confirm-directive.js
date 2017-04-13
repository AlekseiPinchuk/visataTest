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
                    itaMessageService.newConfirm(scope.message).then(
                        function(data) {
                            debugger;
                            scope.callback(data);
                        },
                        function(data) {
                            debugger;
                            console.log(data);
                        },
                        function(data) {
                            console.log(data.progress);
                        });
                });
            }
        };
    }
];
