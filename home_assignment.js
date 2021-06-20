require('dotenv').config();
var express = require("express");
var app = express();
var Twitter = require('twitter');
var url = require('url');
var os = require('os');
var os_util 	= require('os-utils');
const { text } = require("express");

params = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  bearer_token: process.env.BEARER_TOKEN
};
var client = new Twitter(params);


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.route('/tweets').get(function(req, res) {
  var tweetsArray = [];
  var q = url.parse(req.url, true).query;
  client.get('search/tweets', {q: q.query, result_type: 'recent', count: 10}, function(error, tweets, response) {
  for(var ind in tweets.statuses) {
    tweetsArray.push(tweets.statuses[ind].text);
  };
  var tweetsRes = JSON.stringify(tweetsArray);
  res.json(tweetsRes);
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
  res.json(healthJson);
  });
});



