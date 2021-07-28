const { Hero } = require('../models');

module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;
    const createdHero = await Hero.create(body);
    console.log(createdHero);
    res.status(201).send({
      data: createdHero,
    });
  } catch (error) {
    res.status(400).send({
      error,
    });
    // next(err);
  }
};

module.exports.getAllHero = async (req, res, next) => {
  try {
    const heroes = await Hero.findAll();
    res.status(200).send({
      data: heroes,
    });
  } catch (error) {}
};
