'use strict';

const DocusignEnv = require('../service/docusignAPICall');

module.exports.sendEnvelope = function sendEnvelope (req, res, next) {
	var Docusign = require('../service/docusignService');
	console.log("Inside docusign function");
	  var serviceRes = Docusign.sendEnvelopeController('ankur2001@gmail.com')
	  //var serviceRes = {"Docusign":true,"liveAsOf":"2019-12-01T20:52:34Z"};
	  return serviceRes;    
};


module.exports.sendEnv = async function sendEnv (req, res, next) {
	
	console.log("Inside docusign sendEnv function - controller file");
	  var serviceRes = await DocusignEnv.sendEnv();
	  console.log("returning sendEnv response - controller file", serviceRes);
	  return serviceRes;
};