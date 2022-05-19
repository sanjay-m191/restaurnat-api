const express = require('express')
const app = express()
const port = 8021
const cors = require('cors')
const fs = require('fs'); 
const { json } = require('express/lib/response');
const fsPromises = require('fs').promises;

var bodyParser = require('body-parser');
const { checkPrimeSync } = require('crypto');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json()) 
app.use(cors());
//app.use(bodyParser.json());   

const menu = {works: true};
const partySize = {availableSize: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20]}
const slots = {avilableSlots: ['6:30 pm', '4:00 pm', '8:00pm', '10:00 pm']}
const allSlots = {allSlots: ['3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm',
'8:30 pm', '9:00 pm', '10:30 pm', '11:00 pm'
]}
async function wrapper(){
    app.get('/menu', (req, res, next) => {
        res.json(menu);
        res.end();
    })

    app.get('/slots', (req, res, next) => {
        res.json(allSlots);
        res.end();
    })

    app.get('/partySize', (req, res, next) => {
        res.json(partySize);
        res.end();
    })

    app.get('/availableSlots', (req, res, next) => {
        res.json(slots);
        res.end();
    })
}

wrapper();
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
