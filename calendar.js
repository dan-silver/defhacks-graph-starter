var graphClient = require('./graph-helper')()

graphClient
    .api('/me/calendar/events')
    .get((err, res) => {
        console.log(err, res);
    });