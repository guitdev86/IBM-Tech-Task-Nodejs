var express = require('express');
var router = express.Router();
var service = require('../service/service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js' });
});

router.get('/results', async (req, res, next) => {
  let response = await service.getFilteredData();

  if(response) {
    if(req.query.sorted === '1') {
      res.status(200).send(service.sortByDate(response));
    } else {
      res.status(200).send(response);
    } 
  } else {
    res.status(500).send('Cannot connect to VRK server...');
  }
})

module.exports = router;
