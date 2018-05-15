var exports = module.exports = {};
var request = require('request');
var _ = require('underscore');
var moment = require('moment');
var fs = require('fs');
var base64 = require('base-64');

exports.fetch = function(timelineUrl, userObject, dir, callback){
    request.get({
      url: timelineUrl,
    },
      function(error, httpResponse, body){
        if(httpResponse && httpResponse.statusCode == 200){
          var timeline = JSON.parse(body);

          _.each(timeline, function(entry){
            let user = _.findWhere(userObject, {id: entry.from});
            entry.fromName = (user)?user.name:entry.from;
            entry.date = moment(entry.timeStamp).format('YYYY-MM-DD HH mm ss');
            if(entry.file && !entry.secret){ entry.localDir = dir+'/Couple/From '+entry.fromName; }
            if(entry.file && entry.secret == 1){ entry.localDir = dir+'/Couple/Secrets/From '+entry.fromName; }
            if(entry.enc && entry.enc == "b64" && entry.text){ entry.text = base64.decode(entry.text); }
          });

          var CoupleDir = dir+'/Couple';

          fs.writeFile(CoupleDir+'/Timeline.json', JSON.stringify(timeline), 'utf8', function (err) {
              if (err) {
                  return console.log(err);
              }

              console.log("The file was saved!");
          });

          callback({
            moments: _.filter(timeline, function(item){ return item.eventType === "media" && item.file; }),
            secrets: _.filter(timeline, function(item){ return item.secret === 1 && item.file; })
          });

          timeline = null;
        }
      });
};
