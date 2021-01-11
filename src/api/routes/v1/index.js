const express = require('express');
const attachmentRoutes = require('./attachment.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/attachment', attachmentRoutes);

module.exports = router;
