'use strict';

module.exports = function () {

    this.$get = [
        'itaRequestService',
        function (itaRequestService) {
            return {
                getData: function () {
                    return itaRequestService.get('/');
                },

                getValue: function (id) {
                    return itaRequestService.post('/', id);
                }
            }
        }
    ];
};
