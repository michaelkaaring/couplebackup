var exports = module.exports = {};
var request = require('request');
var moment = require('moment');
var fs = require('fs');
var async = require('async');

exports.fetch = function(secretsData, dir, callback){
  var count = 0;

  var finalCount = secretsData.length;

  // Run only 5 downloads at a time.
  async.eachOfLimit(secretsData, 5, function(item, key, cb){
    request.get({
        url: item.file,
      })
      .on("error", function(error) {
        console.log(error);
      })
      .on('response',  function (res) {
        res.pipe(fs.createWriteStream(dir+'/Couple/Secrets/From '+item.fromName+'/'+item.date +'.'+ res.headers['content-type'].split('/')[1]));
        res.on( 'end', function(){
          count = count+1;
          callback({
            count: count,
            finished: (count == finalCount)?true:false
          });
          cb();
          console.log('moment downloaded');
        });
      });
  });

};
