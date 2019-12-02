const request = require('request');

exports.sendEnv = function () {
//	var Docusign = require('../service/docusignService');
	console.log("Inside docusign sendEnv function");
	
	const headers = {
		"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTU3NTIzMjE5OCwiZXhwIjoxNTc1MjYwOTk4LCJVc2VySWQiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJjbGljay5tYW5hZ2UiLCJvcmdhbml6YXRpb25fcmVhZCIsImdyb3VwX3JlYWQiLCJwZXJtaXNzaW9uX3JlYWQiLCJ1c2VyX3JlYWQiLCJ1c2VyX3dyaXRlIiwiYWNjb3VudF9yZWFkIiwiZG9tYWluX3JlYWQiLCJpZGVudGl0eV9wcm92aWRlcl9yZWFkIiwiZHRyLnJvb21zLnJlYWQiLCJkdHIucm9vbXMud3JpdGUiLCJkdHIuZG9jdW1lbnRzLnJlYWQiLCJkdHIuZG9jdW1lbnRzLndyaXRlIiwiZHRyLnByb2ZpbGUucmVhZCIsImR0ci5wcm9maWxlLndyaXRlIiwiZHRyLmNvbXBhbnkucmVhZCIsImR0ci5jb21wYW55LndyaXRlIl0sImF1ZCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImF6cCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJhbXIiOlsiaW50ZXJhY3RpdmUiXSwiYXV0aF90aW1lIjoxNTc1MjMyMTk2LCJwd2lkIjoiNjJiM2QxNDgtOTM2My00MWQyLWI0MWUtOGQ5NjVmMjMzYmJiIn0.kGxzu-26dqJNKiILD3VXZVSVSdCy9404NGEMcutfUkGlF-ihaGBR5jUpAwqFLUq1nktYAdx4H_eg0bQKZmX0mapXUdFfc8gmx2aVB3ztHhYHrAeONOQ0C_T52NJpRd7JE7ZmY8X7gYyEJfh7T528Ol34qz2e3Zaxl72ex2nnBDdn6hMKbWR3hF4w1MU_wbmBLA2_-L4t1DD0JnWZNYdgoL2YNCU-myeLflWlxEDsH9oHCGiQ_A-BY_hsm3QZVm2wy89u5bKpNH0KANBsd800bvdBSV8TYG3bIN5HebQzzGtO_1qw_2ADsJtYCu1lPSTIEH9HJViM_nHrYNjrvekOSA"
	};
	return new Promise(function (resolve, reject){
		var options = {
			url: "https://demo.docusign.net:443/restapi/v2/accounts/9492754/envelopes/93be49ab-afa0-4adf-933c-f752070d71ec",
			headers: headers,
	//		body: body,
	//		json: true,
			method: 'GET'
		}
		
		console.log("Docusign API options....", options);
		request(options,function(err, response, body){
			if(err){
				const errorResponse = {
					status : 500,
					data: JSON.stringify(err)
				}
				console.log("Docusign API ERROR response....", errorResponse);
				return reject(errorResponse);
			}
			else if(response.statusCode === 200 || response.statusCode === 201){
				const Response = {
					status : 200,
					data: JSON.stringify(body)
				}
					console.log("Docusign API SUCCESS response....", Response);
				return resolve(Response);
				
			}
			else {
				const errorResponse1 = {
					status : 500,
					data: JSON.stringify(response)
				}
				console.log("Docusign API response....", errorResponse1);
				return reject(errorResponse1);
			}
		})
		
	}) 
};