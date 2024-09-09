const mongoose = require('mongoose');
const Request = mongoose.model('Request');


const setRequest = async (req, res) => {
  const { coachId, userEmail, userMessage } = req.body;
  const request = new Request({ coachId, userEmail, userMessage });

  await request
        .save()
        .then(newRequest =>{res.status(201).json(newRequest)})
        .catch(() => {res.status(400).json({mess: 'Your request was not recorded'})})
};

module.exports = {
  setRequest
}