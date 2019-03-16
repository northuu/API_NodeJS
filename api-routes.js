const router = require('express').Router();
const logController = require('./logController');
// Set default API response
router.get('/', function (req, res) {
    res.send('Mr Anderson welcome back. We missed you')
});

// Contact routes
router.route('/logs/:collection')
    .get(logController.index)
    .post(logController.new);
// Export API routes
module.exports = router;