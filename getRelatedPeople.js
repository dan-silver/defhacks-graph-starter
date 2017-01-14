var graphClient = require('./graph-helper')()

graphClient
    .api("/me/people")
    .version("beta")
    .get(function(err, response) {
        console.log(response)
    });