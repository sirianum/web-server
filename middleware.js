/**
 * Created by smupp00 on 9/23/16.
 * New Middleware File
 */

var middleware = {
    requireAuthentication : function(req, res, next) {
        console.log('Private route hit');
        next();
    },
    logger : function(req, res, next) {
        console.log('Request : ' +  new Date() + ' ' + req.method + ' ' + req.originalUrl)
        next();
    }
}

module.exports = middleware;