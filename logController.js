// Handle get actions
exports.index = function (req, res) {
    if ("timestamp" in req.query){
        // let date_from  = req.query.timestamp.slice(0, req.query.timestamp.indexOf(','))
        // let date_to  = req.query.timestamp.slice(req.query.timestamp.indexOf(',')+1)
        let dates = req.query.timestamp.split(",")
        req.query.timestamp = {'$gte': new Date(dates[0]),'$lt': new Date(dates[1])}
    }
    db.collection(req.params.collection).find(req.query).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
};

// Handle post log
exports.new = function (req, res) {
    const offset = 2;
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    req.body.timestamp = new Date(utc + (3600000*offset));

    try{
        var test = db.collection(req.params.collection).insertOne(req.body);
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
    res.json({ message:"Not implemented"})
};
// Handle update contact info
exports.update = function (req, res) {
    res.json({ message:"Not implemented"})
};
// Handle delete contact
exports.delete = function (req, res) {
    res.json({ message:"Not implemented"})
};