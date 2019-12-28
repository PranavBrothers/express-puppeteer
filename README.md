1) Create Project folder
2) run --> npm init --yes
3) run --> npm i express
4) run --> npm i -g nodemon
5) run --> npm i puppeteer
6) create file --> index.js inside project folder
7) run --> node git-hub.js command to start server
8) PORT=5001 node git-hub.js
9) PORT=5001 nodemon git-hub.js

http://localhost:3000/
POST  Body - Content Type -- application/json
{
    "userName":"", 
    "userNameElement":"#login_field",
    "password":"", 
    "passwordElement":"#password",
    "url":"https://github.com/login",
    "submit":"[name='commit']",
    "screenshot":"github.png"
}

Generate PDF
==============
http://localhost:3000/pdf?url=https://github.com/PranavBrothers/
