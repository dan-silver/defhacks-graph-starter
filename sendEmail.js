var graphClient = require('./graph-helper')()

graphClient
    .api("/me/sendMail")
    .post({
      "message": {
        "subject": "Meet for lunch?",
        "body": {
          "contentType": "Text",
          "content": "The new cafeteria is open."
        },
        "toRecipients": [
          {
            "emailAddress": {
              "address": "dannysilver3@gmail.com"
            }
          }
        ]
      },
      "saveToSentItems": "false"
    }, function(err, response) {
        console.log(response)
    });