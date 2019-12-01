'use strict';
var Docusign = require('../service/docusignService');

module.exports.sendEnvelope = function sendEnvelope (req, res, next) {
	console.log("Inside docusign function");
	  var serviceRes = Docusign.sendEnvelopeController('sumit.khandelwal14@gmail.com')
	  return serviceRes;
    
};
