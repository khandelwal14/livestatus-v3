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