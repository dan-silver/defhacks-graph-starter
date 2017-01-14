var secrets = require("./secrets");


var url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id="+secrets.APPLICATION_ID+"&response_type=code&redirect_uri=" + secrets.REDIRECT_URI + "&response_mode=query&scope=" + secrets.SCOPES + "&state=12345"

console.log(url);