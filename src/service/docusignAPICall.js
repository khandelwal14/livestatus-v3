const request = require('request');

exports.sendEnv = function () {
//	var Docusign = require('../service/docusignService');
	console.log("Inside docusign sendEnv function");
	
	const headers = {
		"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTU3NTM0OTEwNiwiZXhwIjoxNTc1Mzc3OTA2LCJVc2VySWQiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJjbGljay5tYW5hZ2UiLCJvcmdhbml6YXRpb25fcmVhZCIsImdyb3VwX3JlYWQiLCJwZXJtaXNzaW9uX3JlYWQiLCJ1c2VyX3JlYWQiLCJ1c2VyX3dyaXRlIiwiYWNjb3VudF9yZWFkIiwiZG9tYWluX3JlYWQiLCJpZGVudGl0eV9wcm92aWRlcl9yZWFkIiwiZHRyLnJvb21zLnJlYWQiLCJkdHIucm9vbXMud3JpdGUiLCJkdHIuZG9jdW1lbnRzLnJlYWQiLCJkdHIuZG9jdW1lbnRzLndyaXRlIiwiZHRyLnByb2ZpbGUucmVhZCIsImR0ci5wcm9maWxlLndyaXRlIiwiZHRyLmNvbXBhbnkucmVhZCIsImR0ci5jb21wYW55LndyaXRlIl0sImF1ZCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImF6cCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJhbXIiOlsiaW50ZXJhY3RpdmUiXSwiYXV0aF90aW1lIjoxNTc1MzQ5MTA1LCJwd2lkIjoiNjJiM2QxNDgtOTM2My00MWQyLWI0MWUtOGQ5NjVmMjMzYmJiIn0.mDtZO9EzVoCASeMROs78H-97sGNOH4Nr6DIk1hb5cRqmjKVdNije6pNlQ6nskxhwmeZvzBfYfy46D6ttdmB03JA9amsPlTYvpXlm508o7FWyZyaXAqc619YypiyAKFc5fLRNj2zI0TIMkZya_L0NI3MXInDBiA4m0gQrag5eLa9Qi7zZ3SVU_N5aIFaHmKaP8H16wUm0tWubQ7CukztgT0-adSvWTeA0qRxUne1iCenc4PzZ3Msg7PebYXCK5ydd1yzxbnZIvVXkp5yo3nxHAKmy7ZUe7fS2XRk9zS0OTF-YRAh_r7yMNWaxaaIAuM46U61uPpa1GARYJI7SHbtttQ"
	};
	return new Promise(function (resolve, reject){
		var options = {
			url: "https://demo.docusign.net:443/restapi/v2/accounts/9492754/envelopes/0D10BAE2-A396-487C-9B2B-2C3D29E918E8",
			headers: headers,
	//		body: body,
	//		json: true,
			method: 'GET',
			rejectUnauthorized: false,
			timeout: 15000
		}
		
		console.log("Docusign API options....", options);
		request(options,function(err, response, body){
			console.log("Docusign API Response ....err ", err);
			console.log("Docusign API Response ....response ", response);
			console.log("Docusign API Response ....body ", body);
			if(err){
				const errorResponse = {
					status : 500//,
					//data: err.code
				}
				console.log("Docusign API Response ....err.1", err);
				resolve(errorResponse);
			}
			else if(response.statusCode === 200 || response.statusCode === 201){
				const responseSuccess = {
					status : 200//,
					//data: body
				}
					console.log("Docusign API Response ....response.1", response);
				resolve(responseSuccess);
				
			}
			else {
				const errorResponse1 = {
					status : 503//,
					//data: body
				}
				console.log("Docusign API Response ....body.1", body);
				resolve(errorResponse1);
			}
		})
		
	}) 
};