const request = require('request');

exports.sendEnv = function () {
//	var Docusign = require('../service/docusignService');
	console.log("Inside docusign sendEnv function");
	
	const headers = {
		"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTU3NTM1MDQ2OSwiZXhwIjoxNTc1Mzc5MjY5LCJVc2VySWQiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJjbGljay5tYW5hZ2UiLCJvcmdhbml6YXRpb25fcmVhZCIsImdyb3VwX3JlYWQiLCJwZXJtaXNzaW9uX3JlYWQiLCJ1c2VyX3JlYWQiLCJ1c2VyX3dyaXRlIiwiYWNjb3VudF9yZWFkIiwiZG9tYWluX3JlYWQiLCJpZGVudGl0eV9wcm92aWRlcl9yZWFkIiwiZHRyLnJvb21zLnJlYWQiLCJkdHIucm9vbXMud3JpdGUiLCJkdHIuZG9jdW1lbnRzLnJlYWQiLCJkdHIuZG9jdW1lbnRzLndyaXRlIiwiZHRyLnByb2ZpbGUucmVhZCIsImR0ci5wcm9maWxlLndyaXRlIiwiZHRyLmNvbXBhbnkucmVhZCIsImR0ci5jb21wYW55LndyaXRlIl0sImF1ZCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImF6cCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJhbXIiOlsiaW50ZXJhY3RpdmUiXSwiYXV0aF90aW1lIjoxNTc1MzUwNDY2LCJwd2lkIjoiNjJiM2QxNDgtOTM2My00MWQyLWI0MWUtOGQ5NjVmMjMzYmJiIn0.axJDPyCdvdevoRnzAc_lMN_TKjq5ShrMmorEO5uGMxqEhhJJS4LlnH5HuuPMuDD9dmmfy-w7rxT80WgZG-XGQlJhdMqEYsSgWIk7PwVLvMgBVOFFkzPdIavMoLxlt_Z6-sBaK5LDayOCzdYK9CIz-omJHS8JZGVpjsQEPGCtlFg8LIrKnxUF1G0dl1V9QaaS15puQuP_mIbm8gt_V-AGLL-mqYL4yFswYVrZRJItX3cescQ0O6dZakr09E_oAowfP71PSZJ1Erwf4kxUrRq-yV10YF1-tsI3KEejf2WW4O0rdol-_VeRU3hd7qbee5gkp6ngvtUXJpKpeETrc0U5yQ"
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
			console.log("Docusign API ERR before ifElse....", err);
			console.log("Docusign API response before ifElse....", response);
			console.log("Docusign API body before ifElse....", body);
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
					data: body
				}
					console.log("Docusign API SUCCESS response....", body);
				return resolve(body);
				
			}
			else {
				console.log("Docusign API actual ERROR Response....", response);
				const errorResponse1 = {
					status : 200,
					data: body
				}
				console.log("Docusign API response....", body);
				return resolve(body);
			}
		})
		
	}) 
};