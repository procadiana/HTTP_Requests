module.exports = function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function (response) {
    var data = '';
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      if (response.statusCode !== 200){
        console.log('Response Failed' + statusCode);
      } else{
      data += chunk;
      };
    });
    response.on('end', function(){
      callback(data);
    });
  });

};

function printHTML (html) {
  console.log(html);
}



