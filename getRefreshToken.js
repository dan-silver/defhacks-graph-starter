var code=""; // Paste your code here after logging into your Microsoft account

var request = require("superagent")
var secrets = require("./secrets");


request
    .post("https://login.microsoftonline.com/common/oauth2/v2.0/token")
    .type('form')
    .send({
        client_id: secrets.APPLICATION_ID,
        scope: secrets.SCOPES,
        redirect_uri: secrets.REDIRECT_URI,
        grant_type: "authorization_code",
        client_secret: secrets.CLIENT_SECRET,
        code: code
    })
    .then(function(res) {
        console.log(res.body.refresh_token);
    }).catch(function(error) {
        console.log(error);
    })

