var app = require('./server/server');
//convention, it behaves different than every other file
// going into the server folder and grab the server.js
app.listen(3000);
console.log('on port 3000');

//path = require('path') it does a better job than cwd
