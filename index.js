// Require the fastify framework and instantiate it
const fastify = require('fastify')({
    logger: true
  })
  const os = require('os'),
  hostname = os.hostname();
  // Require external modcules
  const mongoose = require('mongoose')
  
  // Import Routes
  const routes = require('./routes')
  
  // Import Swagger Options
  const swagger = require('./config/swagger')
  
  // Register Swagger
  fastify.register(require('fastify-swagger'), swagger.options)

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

  // Loop over each route
  routes.forEach((route, index) => {
    fastify.route(route)
  })
  
  // Run the server!
  const start = async () => {
    try {
      fastify.listen(port, ip, function (err, address) {
        if (err) {
          fastify.log.error(err)
          process.exit(1)
        }
        console.log('Hi! I am running on host -> ' + hostname + '\n');
        fastify.log.info(`server listening on ${address}`)
      })
     // await fastify.listen(3000)
      //fastify.swagger()
   
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()


