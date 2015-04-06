var Hapi = require('hapi');

var sOptions = {
    host: 'localhost',
    port: 8970
};

// Create a server with a host and port
var server = new Hapi.Server();
server.connection(sOptions);

server.route({
    method: 'GET',
    path: '/img/{param*}',
    handler: {
        directory: {
            path: 'public',
            path: './img'
        }
    }
});

server.route({
    method: 'GET',
    path: '/js/{param*}',
    handler: {
        directory: {
            path: 'public',
            path: './js'
        }
    }
});

server.route({
    method: 'GET',
    path: '/fonts/{param*}',
    handler: {
        directory: {
            path: 'public',
            path: './fonts'
        }
    }
});

server.route({
    method: 'GET',
    path: '/css/{param*}',
    handler: {
        directory: {
            path: 'public',
            path: './css'
        }
    }
});


server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply.file('index.html');
    }
});

server.start();