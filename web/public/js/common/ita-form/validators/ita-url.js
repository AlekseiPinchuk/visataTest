'use strict';

module.exports = function() {
    var URL_REGEXP = /^((?:http|ftp)s?:\/\/)(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::\d+)?(?:\/?|[\/?]\S+)$/i;

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function link(scope, element, attrs, ngModel) {
            var urlFormatter = function (value) {
                if (!URL_REGEXP.test(value) && URL_REGEXP.test('http://' + value)) {
                    return 'http://' + value;
                } else {
                    return value;
                }
            };

            var toLowerCaseFormatter = function(value) {
                if (value) {
                    value = value.toLowerCase();

                    ngModel.$setViewValue(value);
                    ngModel.$render();

                    return value;
                }
            };

            var allowSchemelessUrls = function () {
                ngModel.$parsers.unshift(urlFormatter);
                ngModel.$parsers.unshift(toLowerCaseFormatter);

                ngModel.$formatters.unshift(urlFormatter);
                ngModel.$formatters.unshift(toLowerCaseFormatter);

                ngModel.$validators.url = function (value) {
                    return ngModel.$isEmpty(value) || URL_REGEXP.test(value);
                };
            };

            if (ngModel && attrs.type === 'url') {
                allowSchemelessUrls();
            }
        }
    };
};