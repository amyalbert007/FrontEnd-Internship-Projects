var http = require('http')
var url = require('url')
http.createServer(function(req,res){
    var route = req.url
    if(route==='/'){
        res.end('This is information from backend')
    }
    if(route==='/getusernames'){
        var usernames=['messi','sachin','ronaldo']
        res.end(JSON.stringify(usernames))
    }

    console.log('My name is Amit Kumar and node server started')
}).listen(5000)