'use strict';

module.exports = [function () {
        return {
            restrict: 'E',
            replace: true,
            template: require('./ita-loading-template.html'),
            controller: ['$scope', 'itaLoadingService', function($scope) {
                $scope.isShow = false;

                $scope.$on('showLoading', function() {
                    $scope.isShow = true;
                });

                $scope.$on('hideLoading', function() {
                    $scope.isShow = false;
                });
            }]
        };
    }
];
