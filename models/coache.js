const mongoose = require('mongoose');

const coacheSchema = new mongoose.Schema({
  firsName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  areas: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  hourlyRate: {
    type: Number,
    required: true
  }
});

mongoose.model('Coache', coacheSchema);