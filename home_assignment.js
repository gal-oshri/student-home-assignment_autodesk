var express = require("express");
var app = express();
var Twitter = require('twitter');
var url = require('url');
var os = require('os');
var os_util 	= require('os-utils');




params = {
  consumer_key: 'NzC26USe8NEXCWYQ4XFhk7SK3',
  consumer_secret: 'aR1igDjAugImaq3Ewh8zenAO5PijlFwCHU9JSbTNgZEOAtJ08D',
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAAGDoQgEAAAAAYbIVfjhfpjHz2uyCjWOmm%2BpiGcI%3DW5ZOgeLg8kpvYl1YaFDqSY3idlirn5MpmgGZY9jaHU6ab7tG8l'
};
var client = new Twitter(params);


app.listen(3000);

app.route('/tweets').get(function(req, res) {
  var q = url.parse(req.url, true).query;
  client.get('search/tweets', {q: q.query, result_type: 'recent', count: 10}, function(error, tweets, response) {
  var tweetJson = JSON.stringify(tweets);
  res.end(tweetJson);
 });
});

app.route('/health').get(function(req, res) {
  var total_mem = os.totalmem();
  var free_mem = os.freemem();
  var usage_mem = (total_mem - free_mem)/ total_mem;
  var usage_cpu;
  os_util.cpuUsage(function(v){
    usage_cpu = v;
  
  var healthJson = JSON.stringify({OSname: os.type(), platformVersion: os.release(), MemoryUsage: usage_mem.toString(), CPUUsage: usage_cpu.toString()});
  res.end(healthJson);
  });
});



