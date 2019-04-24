var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    os = require('os'),
    hostname = os.hostname();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

  var mongoUser =  process.env.MONGODB_USER,
  mongoDatabase = process.env.MONGODB_DATABASE,
  mongoPassword = process.env.MONGODB_PASSWORD,
  mongoHost = process.env.CSLMISMONGODB_SERVICE_HOST,
  mongoPort = process.env.CSLMISMONGODB_SERVICE_PORT,
  mongoURL = 'mongodb://';

  mongoURL += mongoUser + ':' + mongoPassword + '@';
  mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

    console.log('Mongo URL '+mongoURL) 
    mongoose.connect(mongoURL,{ useNewUrlParser: true }) 
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err))

    var route = express.Router();

    // All our services are under the /api context
    app.use('/api', route);
    
    // Start defining routes for our app/microservice
    
    // A route that dumps hostname information from pod
    route.get('/', function(req, res) {
        res.send('Hi! I am running on host -> ' + hostname + '\n');
    });

  // Run the server!
app.listen(port, ip);
console.log('nodejs server running on http://%s:%s', ip, port);

module.exports = app;