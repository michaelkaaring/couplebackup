var exports = module.exports = {};
var request = require('request');

exports.auth = function(username, password, callback){
    request.post({
      url:'https://api-ssl.tenthbit.com/authenticate',
      form: {
        userID: username,
        secretKey: password
      }},
      function(error, httpResponse, body){
        if(error){alert(error);}
        if(httpResponse && httpResponse.statusCode == 200){
          callback(JSON.parse(body));
        }
      });
};
