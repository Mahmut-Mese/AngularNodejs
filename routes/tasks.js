var express = require('express');
var router = express.Router();
router.get('/tasks', function(req, res, next) {
    console.log('task api')
})
module.exports = router;