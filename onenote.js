var load = require("cheerio").load;
var graphClient = require('./graph-helper')()

graphClient
    .api("/me")
    .get(function(err, response) {
        console.log(response)
    });

// get the page ID in graph explorer
// https://graph.microsoft.com/beta/me/notes/pages/

graphClient
    .api("/me/notes/pages/1-bb4e1cb53e20417988b763f68966d981!7-c57e2236-e8a4-4e3c-b3d3-f3c042ec2570/$value")
    .version('beta')
    .get(function(err, response, xmlResponse) {
        let $ = load(xmlResponse.text);
        console.log($("p").text())
    });

// https://graph.microsoft.com/beta/me/notes/pages/1-bb4e1cb53e20417988b763f68966d981!7-c57e2236-e8a4-4e3c-b3d3-f3c042ec2570/$value


// add picture to onenote!

graphClient
    .api("/me/notes/pages/1-bb4e1cb53e20417988b763f68966d981!7-c57e2236-e8a4-4e3c-b3d3-f3c042ec2570/content")
    .version('beta')
    .patch([{
        'target':'body',
        'action':'append',
        'position':'after',
        'content':'<img src="http://i.imgur.com/HmZ8DBF.png" />'
    }], function(err, response) {
        console.log('Inserted meme to OneNote page!')
    });
