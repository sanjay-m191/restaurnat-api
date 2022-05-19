const express = require('express')
const app = express()
const port = 8021
const cors = require('cors')
const fs = require('fs'); 
const { json } = require('express/lib/response');
const fsPromises = require('fs').promises;
const authService = require('./private/restaurant-app-84bd8-firebase-adminsdk-8g55w-44e327b134.json')
const middleware = require('./middleware/index')

var bodyParser = require('body-parser');
const { checkPrimeSync } = require('crypto');
const req = require('express/lib/request');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.use(cors());

const menu = ['food' , 'more food']

app.use(middleware.decodeToken)

async function wrapper(){
    app.get('/menu', (req, res, next) => {
        console.log(req.headers.auth);

        res.json(menu);
        res.end();
    })
}

wrapper();
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
