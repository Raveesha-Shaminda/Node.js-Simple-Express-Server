const express = require("express")
const myServer = express()

myServer.get("/helo", function(req,res){
    res.send("Hello World")
});

myServer.listen(7000);