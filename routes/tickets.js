const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/', ticketsCtrl.new);
router.post('/flights/:id/', ticketsCtrl.create);

// router.post('/flights/:id/', ticketsCtrl.addTicket);

module.exports = router;