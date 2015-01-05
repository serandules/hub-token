var debug = require('debug')('serandules-hub-token');
module.exports = function (token, callback) {
    callback(false, {
        id: token
    });
};