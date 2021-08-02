// const { SuperPower } = require('../models');

module.exports.createSuperPower = async (req, res, next) => {
  try {
    const { body, heroInstance } = req;
    const createdPower = await heroInstance.createPower(body);
    res.status(201).send({
      data: createdPower,
    });
  } catch (error) {
    res.status(400).send({
      error,
    });
    next(error);
  }
};
