const mongoose = require('mongoose');
const Request = mongoose.model('Request');
const jwt = require('jsonwebtoken');


const setRequest = async (req, res) => {
  const { coachId, userEmail, userMessage } = req.body;
  const request = new Request({ coachId, userEmail, userMessage });

  await request
        .save()
        .then(newRequest =>{res.status(201).json(newRequest)})
        .catch(() => {res.status(400).json({mess: 'Your request was not recorded'})});
};

const getRequests = async (req, res) => {
  const authHeader = req.get('Authorization');
  const token = authHeader.replace('Bearer ', '').trim();
  
  try {
    const coachId = jwt.verify(token, process.env.SECRET_KEY).id;
    
    Request
      .find({coachId: coachId})
      .then(dataReq => res.status(200).json(dataReq))
  } catch (err) { res.status(400).json({mess: err}) };

};

module.exports = {
  setRequest,
  getRequests
}