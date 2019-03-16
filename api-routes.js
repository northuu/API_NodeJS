const router = require('express').Router();
const logController = require('./logController');
// Set default API response
router.get('/', function (req, res) {
    res.send('Mr Anderson welcome back. We missed you')
});

// Contact routes
router.route('/logs')
    .get(logController.index)
    .post(logController.new);
// router.route('/contacts/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);
// Export API routes
module.exports = router;