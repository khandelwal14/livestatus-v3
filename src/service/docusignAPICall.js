const request = require('request');

exports.sendEnv = function () {
//	var Docusign = require('../service/docusignService');
	console.log("Inside docusign sendEnv function");
	
	const headers = {
		"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTU3NTQyOTU0NywiZXhwIjoxNTc1NDU4MzQ3LCJVc2VySWQiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJjbGljay5tYW5hZ2UiLCJvcmdhbml6YXRpb25fcmVhZCIsImdyb3VwX3JlYWQiLCJwZXJtaXNzaW9uX3JlYWQiLCJ1c2VyX3JlYWQiLCJ1c2VyX3dyaXRlIiwiYWNjb3VudF9yZWFkIiwiZG9tYWluX3JlYWQiLCJpZGVudGl0eV9wcm92aWRlcl9yZWFkIiwiZHRyLnJvb21zLnJlYWQiLCJkdHIucm9vbXMud3JpdGUiLCJkdHIuZG9jdW1lbnRzLnJlYWQiLCJkdHIuZG9jdW1lbnRzLndyaXRlIiwiZHRyLnByb2ZpbGUucmVhZCIsImR0ci5wcm9maWxlLndyaXRlIiwiZHRyLmNvbXBhbnkucmVhZCIsImR0ci5jb21wYW55LndyaXRlIl0sImF1ZCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImF6cCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJhbXIiOlsiaW50ZXJhY3RpdmUiXSwiYXV0aF90aW1lIjoxNTc1NDI5NTQ2LCJwd2lkIjoiNjJiM2QxNDgtOTM2My00MWQyLWI0MWUtOGQ5NjVmMjMzYmJiIn0.Yboz_rxY_I29Wslwd14hqwYpHonMe4EEoPqVMqfiTKwS9jPwYlkpiRM9RYA51juTck-6rQ5fNqQFUJIX8sbBQf-_eDVogI5vGeIAbry39Q65v6oih8byXwWIzcRKr1Y_9VTKZdWcm0eJHAR0DlHrxoozJkP9R8AHE6NSjasH_GHnZY831AVBiZCKQkbTux-AAdlEHO1w4hYN8sclPwcq0QA2hmYOPhDIZLHrIZRl_xwkzDzHrpPeIMVJVSXFl5KWb8DykBfhy72LI0k4fPvtseNf0pHy7T2xZu20ODqV_dBfgZCusG6G2VOu-gu6WuAVeYmvuLh9hbGPRX7yOipzmw"
	};
	return new Promise(function (resolve, reject){
		var options = {
			url: "https://demo.docusign.net:443/restapi/v2/accounts/9492754/envelopes/0D10BAE2-A396-487C-9B2B-2C3D29E918E8",
			headers: headers,
	//		body: body,
			json: true,
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
					"data": "error calling docusign"
				}
				console.log("Docusign API Response ....err.1", err);
				resolve(errorResponse);
			}
			else if(response.statusCode === 200 || response.statusCode === 201){
				const responseSuccess = {
					"data": "success from docusign",
					"details": body 
				}
					console.log("Docusign API Response ....response.1", response);
				resolve(responseSuccess);
				
			}
			else {
				const errorResponse1 = {
					"data": "response from docusign other than 200"
				}
				console.log("Docusign API Response ....body.1", body);
				resolve(errorResponse1);
			}
		})
		
	}) 
};