const express = require('express');
const userDb = require('./userDb');
const {validateUserId, validateUser} = require("../middlewares/validate")

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
 

});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!

  const opts ={
    sortBy: req.query.sortBy, 
    limit: req.query.limit,
  }
  userDb.get(opts)
  .then(users => {
    res.status(200).json(users)
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});



module.exports = router;
