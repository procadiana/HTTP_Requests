function getAndPrintHTML (options) {
  var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  }
  var https = require('https');
  https.get(options, function (response) {
    response.setEncoding('utf8');
    var data = '';
    response.on('data', function (data) {
      if (response.statusCode !== 200){
        console.log('Response Failed' + statusCode);
      } else{
        data += data;
        console.log(data);
      }
    })
  });
}
getAndPrintHTML ()
