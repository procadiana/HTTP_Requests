

function getAndPrintHTMLChunks (){
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    var data = '';
    response.on('data', function (data) {
      if (response.statusCode !== 200){
        console.log('Response Failed' + statusCode);
      } else{
        console.log(data);
      }
    });
  })
};

getAndPrintHTMLChunks();