const express = require('express');
const fileHelper = require('../helpers/file');

const router = express.Router();

// GET /source
router.get('/', async (req, res) => {
  fileHelper.readSourceListFile()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// POST /source
router.post('/', async (req, res) => {
  fileHelper.writeSourceListFile(req.body)
    .then(() => {
      res.status(201).send('Ok');
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
