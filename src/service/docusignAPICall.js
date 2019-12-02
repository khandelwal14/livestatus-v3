const request = require('request');

exports.sendEnv = function () {
//	var Docusign = require('../service/docusignService');
	console.log("Inside docusign sendEnv function");
	
	const headers = {
		"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTU3NTI2MTYxMywiZXhwIjoxNTc1MjkwNDEzLCJVc2VySWQiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJjbGljay5tYW5hZ2UiLCJvcmdhbml6YXRpb25fcmVhZCIsImdyb3VwX3JlYWQiLCJwZXJtaXNzaW9uX3JlYWQiLCJ1c2VyX3JlYWQiLCJ1c2VyX3dyaXRlIiwiYWNjb3VudF9yZWFkIiwiZG9tYWluX3JlYWQiLCJpZGVudGl0eV9wcm92aWRlcl9yZWFkIiwiZHRyLnJvb21zLnJlYWQiLCJkdHIucm9vbXMud3JpdGUiLCJkdHIuZG9jdW1lbnRzLnJlYWQiLCJkdHIuZG9jdW1lbnRzLndyaXRlIiwiZHRyLnByb2ZpbGUucmVhZCIsImR0ci5wcm9maWxlLndyaXRlIiwiZHRyLmNvbXBhbnkucmVhZCIsImR0ci5jb21wYW55LndyaXRlIl0sImF1ZCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImF6cCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJhbXIiOlsiaW50ZXJhY3RpdmUiXSwiYXV0aF90aW1lIjoxNTc1MjYxNjEyLCJwd2lkIjoiNjJiM2QxNDgtOTM2My00MWQyLWI0MWUtOGQ5NjVmMjMzYmJiIn0.Kxxx2fv60tURXXJ4gXs-BLA5wdYCPqROWuKzlKw0ueXMJR5uannTcs2pi9FDwUKD-l_izNCfbRc7SCT2oxvwzXIzjolUg46d4EK2vHNudCsY6t5glGYeBURwbfMKH24VWczdqpIYg3PHwxmcij5t4JX0Vz6QKPu-mcnYZcomkutZ4EfjrzKyUheRdQJA5HtCUaD5-4SnAwaeedW5gPDFWhoTk6JI8bAuK1vSFqgpIbqzZT16xU3LzVuSlfhIVqYEwCqeZg0NdWHAIHm-8wDFUCwyewJvzwLAb8SPfpnpUZiUySDoPKl5Qgbsme0LUsjBVje6Qp-u2isVYCbnwfbsNw"
	};
	return new Promise(function (resolve, reject){
		var options = {
			url: "https://demo.docusign.net:443/restapi/v2/accounts/9492754/envelopes/93be49ab-afa0-4adf-933c-f752070d71ec",
			headers: headers,
	//		body: body,
	//		json: true,
			method: 'GET',
			rejectUnauthorized: false,
			timeout: 5000
		}
		
		console.log("Docusign API options....", options);
		request(options,function(err, response, body){
			if(err){
				console.log("Docusign API ERR....", err);
				const errorResponse = {
					status : 200,
					data: JSON.stringify(err)
				}
				console.log("Docusign API ERROR response....", errorResponse);
				return resolve(errorResponse);
			}
			else if(response.statusCode === 200 || response.statusCode === 201){
				console.log("Docusign API actual Response....", response);
				const Response = {
					status : 200,
					data: JSON.stringify(body)
				}
					console.log("Docusign API SUCCESS response....", Response);
				return resolve(Response);
				
			}
			else {
				console.log("Docusign API actual ERROR Response....", response);
				const errorResponse1 = {
					status : 200,
					data: JSON.stringify(response)
				}
				console.log("Docusign API response....", errorResponse1);
				return resolve(errorResponse1);
			}
		})
		
	}) 
};