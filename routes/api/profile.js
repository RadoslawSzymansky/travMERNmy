const express = require('express');
const router = express.Router();

// @route GET api/proile
// desc Test route
// @access Public
router.get('/', (req, res) => res.send('proile'));

module.exports = router;