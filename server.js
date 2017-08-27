let express = require('express');
let app = express();
let port = 9000;

// Server any files in the public directory
app.use(express.static('public', {extensions: ['html']}));

console.log(`STARTING RASPI-LIVE-DASHBOARD AT PORT ${port}`);
app.listen(port)
