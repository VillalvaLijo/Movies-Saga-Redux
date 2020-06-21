const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
//write a route and a routr.js router file
const moviesRouter = require('./routes/movies.router.js');
app.use('/movies', moviesRouter);

//write route to get genres
const genresRouter = require('./routes/genres.router.js');
app.use('/genres', genresRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});