const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  coachId: {
    type: String,
    required: true
  }, 
  userEmail:{
    type: String,
    required: true
  },
  userMessage: {
    type: String,
    required: true
  }
});

mongoose.model('Request', requestSchema);