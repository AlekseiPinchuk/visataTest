'use strict';

var moment = require('moment');

module.exports = function () {
    return function (input, format) {
        return moment(input).format(format);
    }
};
