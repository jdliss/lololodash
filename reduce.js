var _ = require("lodash");

var reduce = function(collection) {
    var grouped = _.reduce(collection, function(result, object) {
        console.log(object);
        (result[object["article"]] || (result[object["article"]] = [])).push(object["quantity"]);
        return result;
    }, {});

    return _.reduce(grouped, function(result, value, key) {
        var summed = value.reduce(function(pv, cv) { return pv + cv });
        result.push({ article: parseInt(key), total_orders: summed });
        return result
    }, []).reverse();
};

module.exports = reduce;
