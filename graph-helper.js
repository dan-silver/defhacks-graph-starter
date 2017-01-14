var  MicrosoftGraph = require("@microsoft/microsoft-graph-client");
var request = require("superagent")
var secrets = require("./secrets");

module.exports = function() {
    return MicrosoftGraph.Client.init({
        authProvider: (done) => {
            
            // get access token from refresh token
            request
                .post("https://login.microsoftonline.com/common/oauth2/v2.0/token")
                .type('form')
                .send({
                    client_id: secrets.APPLICATION_ID,
                    scope: "calendars.read calendars.readwrite files.read files.readwrite mail.read mail.send notes.readwrite.all user.read user.readbasic.all user.readwrite",
                    redirect_uri: secrets.REDIRECT_URI,
                    grant_type: "refresh_token",
                    client_secret: secrets.CLIENT_SECRET,
                    refresh_token: secrets.REFRESH_TOKEN
                })
                .then(function(res) {
                    done(null, res.body.access_token);
                })
                .catch(function(err) {
                    debugger;
                    console.log(err)
                })
        }
    });
}