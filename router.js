const { Router } = require('express');
const HeroController = require('./controller/hero.controller.js');
const PowerController = require('./controller/power.controller.js');
const HeroMW = require('./middleware/hero.mw');
const router = Router();

router.get('/heroes', HeroController.getAllHero);
router.post('/hero', HeroController.createHero);

router.post('/hero/:id/power/', HeroMW.checkHero, PowerController.createSuperPower);
module.exports = router;
