// greetings.js
var request = require('request');
var exports = module.exports = {};
exports.callRAPI = function(query,callback){
request('https://b9b1c102.ngrok.io'+query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        callback(null,body); //print the list
    }
    else{
        callback("ERROR", null);
    }
})
};

// var request = require('request');
// query="happy"
// request('http://localhost:8080'+query, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log("printing")
//         console.log(body)
//     }
//      else{
//             console.log("Error")
//         } // Print the google web page.
     
// })