const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server
const url = 'mongodb://10.16.193.9:27017';
let collection = 'test3'
var db
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;
    db = client.db('test2');
});


// async function connectToDB(db_name){
//     let client = await MongoClient.connect(url, { useNewUrlParser: true });
//     let db = await client.db(db_name);
//     return db
// }

// let db = connectToDB('test2')


// Handle index actions
exports.index = function (req, res) {
    console.log(req.query)
    db.collection(collection).find(req.query).toArray(function(err, result) {
        if (err) throw err;
        res.json({
            status: "success",
            message: "Logs retrieved successfully",
            data: result
        });
    });
};


// Handle create contact actions
exports.new = function (req, res) {
    const offset = 2;
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    req.body.timestamp = new Date(utc + (3600000*offset));

    try{
        var test = db.collection(collection).insertOne(req.body);
        res.json({
            id:test.insertedId,
        })
    }catch (e){
        res.json({
            id: "fail",
            message: e
        });
    }
};
// Handle view contact info
exports.view = function (req, res) {
    console.log("Not implemented")
};
// Handle update contact info
exports.update = function (req, res) {
    console.log("Not implemented")
};
// Handle delete contact
exports.delete = function (req, res) {
    console.log("Not implemented")
};