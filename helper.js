var exports = module.exports = {};

var fs = require('fs');
var _ = require('underscore');

exports.createDirectories = function(basePath, userObject){
  var CoupleDir = basePath+'/Couple';
  if (!fs.existsSync(CoupleDir)){
    fs.mkdirSync(CoupleDir);
  }

  if (!fs.existsSync(CoupleDir+'/Secrets')){
    fs.mkdirSync(CoupleDir+'/Secrets');
  }

  _.each(userObject, function(user){
    if (!fs.existsSync(CoupleDir+'/From '+user.name)){
      fs.mkdirSync(CoupleDir+'/From '+user.name);
    }
    if (!fs.existsSync(CoupleDir+'/Secrets/From '+user.name)){
      fs.mkdirSync(CoupleDir+'/Secrets/From '+user.name);
    }
  });



};
