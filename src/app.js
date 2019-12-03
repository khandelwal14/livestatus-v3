var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();
module.exports = api;


api.get('/liveStatus', function () {
	
	var Status = require('./controllers/Status');
	
	var finalResponse = Status.getLiveStatus()

  return finalResponse;
});

api.get('/readyStatus', function () {
  return 'hello ready status';
});


api.get('/sendEnvelope', function () {
	
	var Docusign = require('./controllers/Docusign');
	
	var finalResponse = Docusign.sendEnvelope()

  return finalResponse;
});

api.get('/testUpdate', function () {
  return 'hello ready status';
});


api.get('/sendEnv', async function () {
	
	var Docusign = require('./controllers/Docusign');
	
	var finalResponse = await Docusign.sendEnv()
	    console.log("final response in app");
	console.log("final response in app.1",finalResponse);

  return finalResponse;
});