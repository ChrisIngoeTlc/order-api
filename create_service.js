//This script will create a windows service that'll run the API service
//node-windows should be installed globally so do a "npm link node-windows" before running this
var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'TlcOrderApi',
  description: 'The nodejs order-api web server.',
  script: 'D:\\Applications\\order-api\\server.js',
  wait: 2,
  grow: .5
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
