var _ = require("lodash");

var filter = function(users) {
    return _.filter(users, { active: true });
};

module.exports = filter;
