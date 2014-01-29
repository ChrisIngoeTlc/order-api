var OrderDetails = require('../modules/OrderProvider')

//Define the server API url for order interfaces
//Include versions as this is still a prototype
exports.setup = function ( server ) {
  server.get({path: '/Orders/NewNumber', flags: 'i', version: '1.0.0'},OrderDetails.NewOrderNumberV1)
};
