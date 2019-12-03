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


api.get('/sendEnv', function () {
	
	//var Docusign = require('./controllers/Docusign');
	var DocusignEnv = require('./service/docusignAPICall');

	
	//var finalResponse = Docusign.sendEnv()
	
	var finalResponse = DocusignEnv.sendEnv();
	  //var serviceRes = {"Docusign":true,"liveAsOf":"2019-12-01T20:52:34Z"};
	  finalResponse.then(function(res){
		  console.log("response in app")
		  console.log("response in app.1",res)
		  console.log("response in app.1.1",res.data)
		  //return JSON.parse(res.data);
		  return 'success from Docusign hardcoded in app';
	  }).catch(function(err){
		  console.log("error in app")
		  console.log("error in app.1",err)
		  return err;
	  })
	
	//console.log("final response in app");
	//console.log("final response in app.1",finalResponse);
    //return finalResponse;
});