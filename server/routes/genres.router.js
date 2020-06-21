const express = require('express');

const router = express.Router();
//make sure you grab the pool configuration from pool.js
const pool = require('../modules/pool');
//this grabs the pool configurations created in pool.js

//create a router
router.get('/', (req, res) =>{
    console.log('GET /genres inside genres.router.js');
    pool.query(`SELECT * from "genres" 
    JOIN "movies_genres" ON "genres"."id"="movies_genres"."genres_id"
    JOIN "movies" ON "movies_genres"."movie_id"="movies"."id";`).then((result) =>{
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error with GET /movies', error)
        res.sendStatus(500);
    });
})

module.exports = router;