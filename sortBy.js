var _ = require("lodash");

var sortBy = function(items) {
    return _.sortBy(items, function(item) { return -item.quantity });
};

module.exports = sortBy;
