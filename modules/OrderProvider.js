var path    = require('path');
var restify = require('restify');
var applog = require('winston');
var sqlHelper = require('../middleware/sqlhelper');
var jsonHelper = require('../middleware/sqltojsonconverter');

exports.NewOrderNumberV1 = NewOrderNumberV1;

function NewOrderNumberV1(req, res, next) {
	applog.debug('Getting new order number...');
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("declare @allocated int exec " + nconf.get('Data:NewOrderNumberSp') + ' @named_counter_id=106, @allocated=@allocated output select @allocated as order_no',function(err,results){
        if(err){
            return next(new restify.InternalError("Database error."));
        }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}
