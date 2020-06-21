const express = require('express');

const router = express.Router();
//make sure you grab the pool configuration from pool.js
const pool = require('../modules/pool');
//this grabs the pool configurations created in pool.js

//write route to url in server.js, write simple get request to get movies from database
router.get('/', (req, res) =>{
    console.log('GET /movies inside movies.router.js');
    pool.query(`SELECT * from "movies";`).then((result) =>{
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error with GET /movies', error)
        res.sendStatus(500);
    });
})

module.exports = router;

