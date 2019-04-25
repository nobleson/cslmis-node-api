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
    mongoDatabase = process.env.MONGODB_DATABASE || 'samplledb',
    mongoPassword = process.env.MONGODB_PASSWORD,
    mongoHost = process.env.CSLMISMONGODB_SERVICE_HOST || 'localhost',
    mongoPort = process.env.CSLMISMONGODB_SERVICE_PORT || '27017',
    mongoURL = 'mongodb://';

    if(mongoUser == null || mongoPassword== null){
        mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;        
    }else{
        mongoURL += mongoUser + ':' + mongoPassword + '@';
        mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;        

    }

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(mongoURL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

var indexRouter = require('./routes');
var artisanRouter = require('./routes/Artisan');
var artisanCenterRouter = require('./routes/ArtisanCenter');
var artisanEducationRouter = require('./routes/ArtisanEducation');
var artisanApprentishipRouter = require('./routes/ArtisanApprentiship');

// All our services are under the /api context
app.use('/api', indexRouter); 
app.use('/api/artisan', artisanRouter); 
app.use('/api/artisanCenter', artisanCenterRouter); 
app.use('/api/artisanEducation', artisanEducationRouter);
app.use('/api/artisanApprentiship', artisanApprentishipRouter); 

// Start defining routes for our app/microservice

// A route that dumps hostname information from pod


app.listen(port, ip);
console.log('nodejs server running on http://%s:%s', ip, port);

module.exports = app;
