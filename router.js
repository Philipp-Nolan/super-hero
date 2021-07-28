const { Router } = require('express');
const HeroController = require('./controller/hero.controller.js');
const router = Router();

router.get('/heroes', HeroController.getAllHero);
router.post('/createhero', HeroController.createHero);

module.exports = router;
