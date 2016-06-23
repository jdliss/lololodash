var _ = require("lodash");

var template = function(object) {
    return _.template('Hello <%= name %> (logins: <%= login.length %>)')(object)
};

module.exports = template;
