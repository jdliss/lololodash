var _ = require("lodash");

var analyze = function(collection) {
    function average (collection) {
        return _.reduce(collection, function(result, object) {
            return result + object["income"];
        }, 0);
    };

    var averageIncome = average(collection)/collection.length;

    var over = _.filter(collection, function(object) {
        return object["income"] > averageIncome;
    });

    var under = _.filter(collection, function(object) {
        return object["income"] <= averageIncome;
    });

    return { average: averageIncome,
             underperform: _.orderBy(under, "income", "asc"),
             overperform: _.orderBy(over, "income", "asc")
           };
};

module.exports = analyze;
