### Getting Started
* Install Node.js at https://nodejs.org/en/
* Run `npm install`
* Register your app at https://apps.dev.microsoft.com
* Update [secrets.js](secrets.js) with your refresh token and app info (see getting a refresh token below)
* Run `node onenote.js` or click launch in Visual Studio Code


### Which Microsoft account can I use?
* If you have a university account with Office 365 (Outlook web app), I recommend using that!
* Otherwise, contact Dan ([@dansilver82](https://twitter.com/dansilver82)) to get a sample account for the weekend
* If you have an @outlook.com or @live.com email address, you can try using that account for some parts of the Graph

### Getting a refresh token
* Register your app at https://apps.dev.microsoft.com
* Under platforms, add web and enter the redirect URL as `https://localhost:3000`
* Under `Application Secrets`, click `Generate New Password` and paste this into `secrets.js` as the client secret
* Copy the `Application Id` into secrets.js as the `APPLICATION_ID`
* Run `node getLoginUrl` and go to that URL in your web browser
* After the redirect, copy the CODE url parameter into `getRefreshToken.js` and run `node getRefreshToken`
* Paste that refresh token into `secrets.js` and you're ready to run onenote.js or any of the other demos! 

### Resources
* Microsoft Graph Explorer - https://graph.microsoft.io/en-us/graph-explorer
* Microsoft Graph JavaScript library - https://github.com/microsoftgraph/msgraph-sdk-javascript
