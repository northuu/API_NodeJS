let express = require('express');
let bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;

let app = express();
// Import routes
let apiRoutes = require("./api-routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connection url

// Database Connection
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://10.16.193.9:27017';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;
    global.db = client.db('test2');
});

// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send("As you can see, we've had our eye on you for some time now, Mr. Anderson."));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});