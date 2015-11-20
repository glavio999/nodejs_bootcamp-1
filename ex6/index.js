var http = require('http');
var cheerio = require('cheerio');
http.get("http://www.triptyk.eu", function(res) {
  console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data',function(data){
    var $= cheerio.load(data);
    $('a').each(function(i,element){
      console.log(element.attribs.href);
    });
  });
  res.on('error', function(err){
    console.log(err);
  });
})
