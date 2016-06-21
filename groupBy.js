var _ = require("lodash");

var group = function(collection) {
    var grouped = _.groupBy(collection, "username");

    var array = [];

    _.forEach(grouped, function (object, name) {
        var obj = {};
        obj["username"] = name;
        obj["comment_count"] = _.size(object);
        array.push(obj);
    })

    return array.reverse();
};

module.exports = group;
