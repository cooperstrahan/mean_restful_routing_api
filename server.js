const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 8000;
// const mongoose = require('mongoose');

app.listen(port, function(){});

require('./server/config/routes.js')(app);