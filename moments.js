var exports = module.exports = {};
var request = require('request');
var _ = require('underscore');
var moment = require('moment');
var fs = require('fs');

exports.fetch = function(momentsData, dir, callback){
  var count = 0;

  var finalCount = momentsData.length;

  _.each(momentsData, function(item){
    request.get({
      url: item.file,
    })
    .on("error", function(error) {
        
    })
    .on('response',  function (res) {
      res.pipe(fs.createWriteStream(dir+'/Couple/From '+item.fromName+'/'+item.date +'.'+ res.headers['content-type'].split('/')[1]));
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
