// Handle get actions
exports.index = function (req, res) {
    if ("timestamp" in req.query){
        let dates = req.query.timestamp.split(",")
        req.query.timestamp = {'$gte': new Date(dates[0]),'$lt': new Date(dates[1])}
    }
    db.collection(req.params.collection).find(req.query).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
};

// Handle post action
exports.new = function (req, res) {
    const offset = 2;
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    req.body.timestamp = new Date(utc + (3600000*offset));

    try{
        var posted_element = db.collection(req.params.collection).insertOne(req.body);
        res.json({
            id:posted_element.insertedId,
        })
    }catch (e){
        res.json({
            id: "fail",
            message: e
        });
    }
};

// Handle get counters action
exports.get_counter = function (req, res) {
    if ("timestamp" in req.query){
        let dates = req.query.timestamp.split(",")
        req.query.timestamp = {'$gte': new Date(dates[0]),'$lt': new Date(dates[1])}
    }
    db.collection(req.params.collection).countDocuments(req.query,function(err, result) {
        if (err) throw err;
        res.json(result);
    });
};