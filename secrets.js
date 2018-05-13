var exports = module.exports = {};
var request = require('request');
var _ = require('underscore');
var moment = require('moment');
var fs = require('fs');

exports.fetch = function(secretsData, dir, callback){
  var count = 0;

  var finalCount = secretsData.length;

  _.each(secretsData, function(item){
    request.get({
      url: item.file,
    })
    .on("error", function(error) {
        
    })
    .on('response',  function (res) {
      res.pipe(fs.createWriteStream(dir+'/Couple/Secrets/From '+item.fromName+'/'+item.date +'.'+ res.headers['content-type'].split('/')[1]));
      res.on( 'end', function(){
        count = count+1;
        callback({
          count: count,
          finished: (count == finalCount)?true:false
        });
      });
    });
  });

};
