const mongoose = require('mongoose');
const Coache = mongoose.model('Coache');

const getCoaches = (_req, res) => {
  
  Coache
    .find()
    .exec()
    .then(coaches => res.status(200).json(coaches))
    .catch(err => console.log(err));
};

const setCoache = (req, res) => {
  const {firstName, lastName, areas, description, hourlyRate} = req.body;
  const coache = new Coache({firstName, lastName, areas, description, hourlyRate});
  
  coache
    .save()
    .then((newCoache) => res.status(200).json(newCoache))
    .catch((err) => console.log(err));
}

module.exports = {
  getCoaches,
  setCoache
};