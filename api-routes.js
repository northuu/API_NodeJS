const router = require('express').Router();
const logController = require('./logController');
// Set default API response
router.get('/', function (req, res) {
    res.send('Mr Anderson welcome back. We missed you')
});

// Log routes
router.route('/logs/:collection')
    .get(logController.index)
    .post(logController.new);
// Log routes
router.route('/log_counter/:collection')
    .get(logController.get_counter);
// Export API routes
module.exports = router;