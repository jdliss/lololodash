var _ = require("lodash");

var min = function(collection) {
    var towns = { hot: [], warm: [] }
    _.forEach(collection, function(temps, name) {
        if (_.every(temps, function(temp) { return temp > 19 })) {
            towns.hot.push(name);
        } else if (_.some(temps, function(temp) { return temp > 19 })){
            towns.warm.push(name);
        }
    });
    return towns;
};

module.exports = min;
