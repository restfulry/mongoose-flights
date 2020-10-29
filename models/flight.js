const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationsSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: {
    type: Date,
  }
}, {
    timestamps: true,
  });

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String, 
    default: 'DEN',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date, 
    default: function() {
      return new Date(+ new Date() + 365*24*60*60*1000);
    }
  },
  destinations: [destinationsSchema],
});

module.exports = mongoose.model('Flight', flightSchema);