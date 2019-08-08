'use strict';

//======================== Globla Variables and appplication dependensies ================================//

// these are our application dependencies
const express = require('express');
const app = express();

//add cors and superagent
const cors = require('cors');
app.use(cors());
const superagent = require('superagent');

// configure environment variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const pg = require('pg');

//connection to the client
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));


// tell our express server to start listening on port PORT
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

//=======================================================================================================//


app.get('/location', getLocation);
app.get('/weather', getWeather);
app.get('/events', getEvents);


const getLocation