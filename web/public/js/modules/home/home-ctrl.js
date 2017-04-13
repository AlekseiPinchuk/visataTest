'use strict';

module.exports = [
    '$scope',
    'homeService',
    function ($scope, homeService) {

        homeService.getData().then(function (res) {
            $scope.product = res.data[0];
            $scope.product.commission = 0;
            $scope.result = getCost();
            $scope.result_m3 = getCost() / $scope.product.size_m3;
        });

        $scope.getProduct = function () {
            var e = document.getElementById("productSelect");
            var index = e.options[e.selectedIndex].value;

            homeService.getValue({id:index}).then(function (res) {
                $scope.product = res.data[0];
                $scope.product.commission = 0;
                $scope.result = getCost();
                $scope.result_m3 = getCost() / $scope.product.size_m3;
            })
        };

        $scope.getResult = function () {
            $scope.result =  getCost();
            $scope.result_m3 = getCost() / $scope.product.size_m3;
        };

        function getCost() {
                var result = $scope.product.size_m3 * $scope.product.push_price *
                    (100 - $scope.product.deffect_procent)/100 + $scope.product.size_m3 *
                    $scope.product.deffect_cost * ($scope.product.deffect_procent/100) +
                    Number($scope.product.logistic) +
                    $scope.product.commission * $scope.product.size_m3;

                return result;
        }
    }
];
