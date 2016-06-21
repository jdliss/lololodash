var _ = require("lodash");

var chain = function(collection) {
    return _.chain(collection)
        .sort()
        .map(function(word) {
            return word.toUpperCase().concat("CHAINED")
        })
};

module.exports = chain;
