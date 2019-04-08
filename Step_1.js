

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
      data += data;
      console.log('Chunk Received.');
      console.log(data);
    });


})
};

getAndPrintHTMLChunks();