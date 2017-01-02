var builder = require('botbuilder');
var restify = require('restify');
var greetings = require("./greetings.js");
var synonyms = require('find-synonyms');

var connector = new builder.ChatConnector();
var bot = new builder.UniversalBot(connector);
bot.dialog('/', [
    function(session) {
        builder.Prompts.text(session, 'Enter your topic');
    },
    function(session, results) {
    s = results.response;
    //synonyms(word, n, function (syns) {
  // syns has length at most n and has synonyms of word 
    //console.log(syns)
    
    greetings.callRAPI("/index?doc=" + results.response, function(err,data){
    console.log(s);
    if (err) console.log(err);
    else {
        var obj1 = JSON.parse(data);
        for(i=0;i<6;i++){
        session.send("Document:%s   Score: %s", obj1[i]['id'],obj1[i]['scores'])
        }//console.log(data);
}
});
    }
]);

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
server.post('/api/messages', connector.listen());