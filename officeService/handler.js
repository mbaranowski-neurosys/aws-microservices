'use strict';

const offices = [
  { id: 1, name: 'WarsawOffice' },
  { id: 2, name: 'WroclawOffice' },
  { id: 3, name: 'KrakowOffice' },
  { id: 4, name: 'KatowiceOffice' },
];

module.exports.officeHandler = (event, context, callback) => {
  
  var aws = require('aws-sdk');
  var lambda = new aws.Lambda({
    region: 'us-east-1' //change to your region
  });

  lambda.invoke({
    FunctionName: 'arn:aws:lambda:us-east-1:136106413148:function:userService-dev-getAllUsers',
    Payload: JSON.stringify(event) // pass params
  }, function(error, data) {
      if (error) {
          console.log(error);
          context.done('error', error);
      }
      else if(data.Payload){
          context.succeed(JSON.parse(data.Payload));
      }
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
};
