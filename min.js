var _ = require("lodash");

var min = function(collection) {
    var towns = { hot: [], warm: [] }

    function isHot(temp) { return temp > 19 };

    _.forEach(collection, function(temps, name) {
        if (_.every(temps, isHot)) {
            towns.hot.push(name);
        } else if (_.some(temps, isHot)) {
            towns.warm.push(name);
        }
    });
    return towns;
};

module.exports = min;
