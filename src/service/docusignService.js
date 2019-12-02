"use strict";

const docusign = require('docusign-esign')
    , path = require('path')
    , fs = require('fs')
    , process = require('process')
    , basePath = 'https://demo.docusign.net/restapi'
    , express = require('express')
    , envir = process.env
    ;
    

async function sendEnvelopeController (email) {
    
    try{
  
  // Obtain an OAuth token from https://developers.docusign.com/oauth-token-generator
  const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTU3NTIzMjE5OCwiZXhwIjoxNTc1MjYwOTk4LCJVc2VySWQiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJjbGljay5tYW5hZ2UiLCJvcmdhbml6YXRpb25fcmVhZCIsImdyb3VwX3JlYWQiLCJwZXJtaXNzaW9uX3JlYWQiLCJ1c2VyX3JlYWQiLCJ1c2VyX3dyaXRlIiwiYWNjb3VudF9yZWFkIiwiZG9tYWluX3JlYWQiLCJpZGVudGl0eV9wcm92aWRlcl9yZWFkIiwiZHRyLnJvb21zLnJlYWQiLCJkdHIucm9vbXMud3JpdGUiLCJkdHIuZG9jdW1lbnRzLnJlYWQiLCJkdHIuZG9jdW1lbnRzLndyaXRlIiwiZHRyLnByb2ZpbGUucmVhZCIsImR0ci5wcm9maWxlLndyaXRlIiwiZHRyLmNvbXBhbnkucmVhZCIsImR0ci5jb21wYW55LndyaXRlIl0sImF1ZCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImF6cCI6ImYwZjI3ZjBlLTg1N2QtNGE3MS1hNGRhLTMyY2VjYWUzYTk3OCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJmOTE3YWEwMi1hY2VjLTQwZWQtYmE1Ny0wZGNmZjhkNDFmZTIiLCJhbXIiOlsiaW50ZXJhY3RpdmUiXSwiYXV0aF90aW1lIjoxNTc1MjMyMTk2LCJwd2lkIjoiNjJiM2QxNDgtOTM2My00MWQyLWI0MWUtOGQ5NjVmMjMzYmJiIn0.kGxzu-26dqJNKiILD3VXZVSVSdCy9404NGEMcutfUkGlF-ihaGBR5jUpAwqFLUq1nktYAdx4H_eg0bQKZmX0mapXUdFfc8gmx2aVB3ztHhYHrAeONOQ0C_T52NJpRd7JE7ZmY8X7gYyEJfh7T528Ol34qz2e3Zaxl72ex2nnBDdn6hMKbWR3hF4w1MU_wbmBLA2_-L4t1DD0JnWZNYdgoL2YNCU-myeLflWlxEDsH9oHCGiQ_A-BY_hsm3QZVm2wy89u5bKpNH0KANBsd800bvdBSV8TYG3bIN5HebQzzGtO_1qw_2ADsJtYCu1lPSTIEH9HJViM_nHrYNjrvekOSA";

  
  const accountId = "9492754"; 

  // Recipient Information:
  const signerName = "Acme";
  const signerEmail = email;

  // The document you wish to send. Path is relative to the root directory of this repo.
  const fileName = 'World_Wide_Corp_lorem.pdf';

  
  /**
   *  The envelope is sent to the provided email address. 
   *  One signHere tab is added.
   *  The document path supplied is relative to the working directory 
   */
  const apiClient = new docusign.ApiClient();
  apiClient.setBasePath(basePath);
  apiClient.addDefaultHeader('Authorization', 'Bearer ' + accessToken);
  // Set the DocuSign SDK components to use the apiClient object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // Create the envelope request
  // Start with the request object
  const envDef = new docusign.EnvelopeDefinition();
  //Set the Email Subject line and email message
  envDef.emailSubject = 'Please sign this document sent from the Node example';
  envDef.emailBlurb = 'Please sign this document sent from the Node example.'

  // Read the file from the document and convert it to a Base64String
  const pdfBytes = fs.readFileSync(path.resolve(__dirname, fileName))
      , pdfBase64 = pdfBytes.toString('base64');
  
  // Create the document request object
  const doc = docusign.Document.constructFromObject({documentBase64: pdfBase64,
        fileExtension: 'pdf',  // You can send other types of documents too.
        name: 'Sample document', documentId: '1'});

  // Create a documents object array for the envelope definition and add the doc object
  envDef.documents = [doc];

  // Create the signer object with the previously provided name / email address
  const signer = docusign.Signer.constructFromObject({name: signerName,
        email: signerEmail, routingOrder: '1', recipientId: '1'});

  // Create the signHere tab to be placed on the envelope
  const signHere = docusign.SignHere.constructFromObject({documentId: '1',
        pageNumber: '1', recipientId: '1', tabLabel: 'SignHereTab',
        xPosition: '195', yPosition: '147'});

  // Create the overall tabs object for the signer and add the signHere tabs array
  // Note that tabs are relative to receipients/signers.
  signer.tabs = docusign.Tabs.constructFromObject({signHereTabs: [signHere]});

  // Add the recipients object to the envelope definition.
  // It includes an array of the signer objects. 
  envDef.recipients = docusign.Recipients.constructFromObject({signers: [signer]});
  // Set the Envelope status. For drafts, use 'created' To send the envelope right away, use 'sent'
  envDef.status = 'sent';

  // Send the envelope
  let envelopesApi = new docusign.EnvelopesApi()
    , results
    ;

  try {
    results = await envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef})
  } catch  (e) {
    let body = e.response && e.response.body;
    if (body) {
      // DocuSign API exception
      console.log (`<html lang="en"><body>
                  <h3>API problem</h3><p>Status code ${e.response.status}</p>
                  <p>Error message:</p><p><pre><code>${JSON.stringify(body, null, 4)}</code></pre></p>`);
    } else {
      // Not a DocuSign exception
      throw e;
    }
  }
  // Envelope has been created:
  console.log("results "+JSON.stringify(results));
  return results;
 
  
}catch(error){
    console.log("Error In Send Envelpe catch "+error +JSON.stringify(error));
}
}
