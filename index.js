const express = require('express')
const app = express()
const port = 8021
const cors = require('cors')
const fs = require('fs'); 
const { json } = require('express/lib/response');
const fsPromises = require('fs').promises;
const authService = require('./private/restaurant-app-84bd8-firebase-adminsdk-8g55w-44e327b134.json')
const middleware = require('./middleware/index')
const admin = require('firebase-admin');

var bodyParser = require('body-parser');
const { checkPrimeSync } = require('crypto');
const req = require('express/lib/request');
const { response } = require('express');
const { firestore } = require('firebase-admin');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.use(cors());
app.use(middleware.decodeToken)


const menu = ['food' , 'more food']
const db = admin.firestore();
async function getMarkers() {

}

getMarkers();

async function wrapper(){
    app.get('/bookings', async (req, res, next) => {
      const events = db.collection('bookings')
      const querySnapshot = await events.get();
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
        res.json(tempDoc);
        res.end();
    })

    app.post('/reservation', async (req, res, next) => {
      console.log(req.body)
      db.collection('bookings').doc().set(req.body, { merge: true }); 
      res.json({requestBody: req.body})
      res.end();
    })

    const mock = {firstName: "name",
    lastName: "no name",
    partySize: 2,
    reserved: true}

/*     {
      id: '1220211212122',
      reserved: true,
      firstName: 'name',
      partySize: 2,
      slot: Timestamp { _seconds: 1652983200, _nanoseconds: 0 },
      lastName: 'no name',
      type: 'standard'
    } */

    app.get('/test', (req, res, next) => {
      console.log('here');
      const data = {
      reserved: 0,
      firstName: 'asdf',
      partySize: 6,
      slot: firestore.Timestamp.fromDate(new Date()),
      lastName: 'ydfes dfs',
      type: 'outdoor'}
       db.collection('bookings').doc('6842215242128').set(data, { merge: true }); 
      res.json({requestBody: req.body})
    })

    app.get('/menu', async (req, res, next) => {
        const events = db.collection('menu').doc("MAINS")
        const querySnapshot = await events.get();
        const tempDoc = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
          res.json(tempDoc);
          res.end();

    })


    app.get('/todayBooking', async (req, res, next) => {
      const events = db.collection('bookings')
      const querySnapshot = await events.get();
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      const currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'-')
      const tempData = tempDoc.filter((entry) => {
        console.log(currentDate, entry.pickedDate);
        return entry.pickedDate === currentDate})
      console.log(tempData);
        res.json(tempData);
        res.end();

  })


}

wrapper();
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
