function getHTML (options, callback) {
  var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  }
  var https = require('https');


  https.get(options, function (response) {
    // response.on('end');
    var data = '';
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      if (response.statusCode !== 200){
        console.log('Response Failed' + statusCode);
      } else{
      data += chunk;
    };

    response.on('end', function(){
      printHTML(data);

    });
  })
});
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML()
