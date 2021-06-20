const dotenv = require('dotenv');

dotenv.config();

const port = process.env.SV_PORT || 9090

const restify = require('restify');


const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['*'],
    allowHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
    exposeHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
});


const errorHandler = require('restify-errors');

const jwt = require('jsonwebtoken');


var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./database.db"
    }
});

//start up a db connection pool/file
const server = restify.createServer({
    name: 'my_footprint_api',
    version: '0.1.0'
});

//configure cors
server.pre(cors.preflight);
server.use(cors.actual);

//enable compression for faster communication
server.use(restify.plugins.gzipResponse());

//configure restify
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

//starts server
server.listen(port, function () {
    console.log('\033[2J'); //limpa o console
    console.log('My Footprint API running at %s', server.url);
});

//configure server route manager
require('./src/routes.js')({ server, errorHandler, knex, jwt });
