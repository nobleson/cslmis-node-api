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

//All artisan routers
var indexRouter = require('./routes');
<<<<<<< HEAD
var artisanRouter = require('./routes/Artisan');
var artisanNvqCenterRouter = require('./routes/ArtisanNvqCenter');
var artisanEducationRouter = require('./routes/ArtisanEducation');
var artisanApprentishipRouter = require('./routes/ArtisanApprentiship');
var artisanEmployementHistoryRouter = require('./routes/ArtisanEmployementHistory');
var artisanCertificateIdRouter = require('./routes/ArtisanCertificate');
var artisanLicenseRouter = require('./routes/ArtisanLicense');

//Article router
var articleRouter = require('./routes/article/Article');

// Company routes
var companyRouter = require('./routes/company/Company');
var jobAdventRouter = require('./routes/company/JobAdvent');
var jobApplicationRouter = require('./routes/company/JobApplication');
var labourStatisticRouter = require('./routes/company/LabourStatistic');
var retrenchementRouter = require('./routes/company/Retrenchement');
=======
var artisanRouter = require('./routes/artisan/Artisan');
var artisanCenterRouter = require('./routes/artisan/ArtisanCenter');
var artisanEducationRouter = require('./routes/artisan/ArtisanEducation');
var artisanApprentishipRouter = require('./routes/artisan/ArtisanApprentiship');
>>>>>>> 5da880493d56b131c64eded8269697ea7cbef546

var centerRouter = require('./routes/center/Center');
var centerCourseRouter = require('./routes/center/Course');
var centerStrength = require('./routes/center/Strength');
var centerBoard = require('./routes/center/Board');
var centerFacility = require('./routes/center/Facility');
var centerAffiliate = require('./routes/center/Affiliate');
var centerTrade = require('./routes/center/Trade');
var centerProgram = require('./routes/center/Program');
var centerReport = require('./routes/center/Report');

// All our services are under the /api context 
app.use('/api', indexRouter); 
app.use('/api/artisan', artisanRouter); 
<<<<<<< HEAD
app.use('/api/artisanNvqCenter', artisanNvqCenterRouter); 
app.use('/api/artisanEducation', artisanEducationRouter);
app.use('/api/artisanApprentiship', artisanApprentishipRouter);
app.use('/api/artisanEmployementHistory', artisanEmployementHistoryRouter); 
app.use('/api/artisanCertificate', artisanCertificateIdRouter);
app.use('/api/artisanLicense', artisanLicenseRouter);

app.use('/api/article', articleRouter);

app.use('/api/company', companyRouter);
app.use('/api/jobAdvent', jobAdventRouter);
app.use('/api/jobApplication', jobApplicationRouter);
app.use('/api/labourStatistic', labourStatisticRouter);
app.use('/api/retrenchement', retrenchementRouter);

=======
app.use('/api/artisan/center', artisanCenterRouter); 
app.use('/api/artisan/education', artisanEducationRouter);
app.use('/api/artisan/apprentiship', artisanApprentishipRouter); 

app.use('/api/center', centerRouter); 
app.use('/api/center/course', centerCourseRouter); 
app.use('/api/center/strength', centerStrength); 
app.use('/api/center/board', centerBoard); 
app.use('/api/center/facility', centerFacility); 
app.use('/api/center/affiliate', centerAffiliate); 
app.use('/api/center/trade', centerTrade); 
app.use('/api/center/program', centerProgram); 
app.use('/api/center/report', centerReport); 
>>>>>>> 5da880493d56b131c64eded8269697ea7cbef546


// Start defining routes for our app/microservice

// A route that dumps hostname information from pod
 

app.listen(port, ip);
console.log('nodejs server running on http://%s:%s', ip, port);

module.exports = app;
