'use strict';

const DocusignEnv = require('../service/docusignAPICall');

module.exports.sendEnvelope = function sendEnvelope (req, res, next) {
	var Docusign = require('../service/docusignService');
	console.log("Inside docusign function");
	  var serviceRes = Docusign.sendEnvelopeController('ankur2001@gmail.com')
	  //var serviceRes = {"Docusign":true,"liveAsOf":"2019-12-01T20:52:34Z"};
	  return serviceRes;    
};


module.exports.sendEnv = function sendEnv (req, res, next) {
	
	console.log("Inside docusign function");
	  var serviceRes = DocusignEnv.sendEnv();
	  //var serviceRes = {"Docusign":true,"liveAsOf":"2019-12-01T20:52:34Z"};
	  serviceRes.then(function(res){
		  console.log("response in controller")
		  console.log("response in controller.1",res)
		  return res;
	  }).catch(function(err){
		  console.log("error in controller")
		  console.log("error in controller.1",err)
		  return err;
	  })
};
