const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render(`flights/${req.params.id}/`, { 
      title: "Flight", 
      flight})
  });
};

function create(req, res) {
  Ticket.create(req.body, function(err, ticket) {
    ticket.flight = req.params.id;
    ticket.save(function(err) {
      res.redirect(`/flights/${req.params.id}`);
    });
  });
};

// function addTicket(req, res) {
//   Ticket.create(req.body, function(err, ticket) {
//     ticket.flight = req.params.id;
//     ticket.save(function(err) {
//       res.redirect(`flights/${req.params.id}`);
//     });
//   });
// };


module.exports = {
  new: newTicket,
  create,
  // addTicket,
}