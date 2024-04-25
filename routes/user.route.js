const router = require('express').Router();

router.get('/profile', async (req, res, next) => {
  // console.log(req.user);
  const person = req.user;
  res.render('profile', { person });
});

router.get('/media&technology', async (req, res, next) => {
  res.render('media&technology');
});

router.get('/log', async (req, res, next) => {
  res.render('log');
});

module.exports = router;
