const mongoose = require('mongoose');
const Coache = mongoose.model('Coache');

const getCoaches = async (_req, res) => {
  
  await Coache
    .find()
    .exec()
    .then(coaches => res.status(200).json(coaches))
    .catch(err => console.log(err));
};

const setCoache = async (req, res) => {
  const {firstName, lastName, areas, description, hourlyRate, userId} = req.body;
  const coache = new Coache({firstName, lastName, areas, description, hourlyRate, userId});
  const findCoach = await Coache.findOne({userId});

  if (findCoach) return res.status(400).json({ mess: 'Coach exist'});
  
  await coache
        .save()
        .then((newCoache) => res.status(200).json(newCoache))
        .catch((err) => console.log(err));
}

module.exports = {
  getCoaches,
  setCoache
};