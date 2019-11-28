let express = require('express');
let router = express.Router();

router.use(express.static(__dirname + "../public"));

router.get('/', function(request, response, next) {

  response.sendFile('views/index.html', { root: '../pucflix-node/'});

});

module.exports = router;