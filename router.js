const express = require('express');
const cors = require('cors');
const router = express.Router();
const Fond = require('./models/Fond');

router.get('/', cors(), (req, res) => {
  const data = { message: 'router.get OK' }
  res.json(data);
});

router.post('/', cors(), async (req, res) => {
  try {
    const myRequest = await req.body;
    console.log('прилетело с клиента:', myRequest);

    const fonds = await Fond.find();
    res.json(fonds);
  }
  catch (err) {
    console.log(err);
  }
});

module.exports = router;
