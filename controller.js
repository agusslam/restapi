'user strict';
var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("APlkasi REST Berjalan",res)
};