
var admin = require("firebase-admin");

var serviceAccount = require("./private/restaurant-app-84bd8-firebase-adminsdk-8g55w-44e327b134.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://restaurant-app-84bd8-default-rtdb.asia-southeast1.firebasedatabase.app"
});

module.exports = admin;