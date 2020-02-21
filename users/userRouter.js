const express = require('express');
const userDb = require('./userDb');
const {validateUserId, validateUser} = require("../middlewares/validate")

const router = express.Router();

router.post('/',validateUser(), (req, res, next) => {
  // do your magic!
 userDb.insert(req.body)
 .then(user =>{
   res.status(201).json(user)
 })
//using next here can shorten our catch statments even more
 .catch(next)

});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});
// This handles the route /api/hubs
// We no longer have to define the route prefix,
// since it's defined when attaching to the main router in `index.js`
router.get('/', (req, res, next) => {
  // do your magic!
// query strings allow us to pass generic key/values not specific to the resource.
	// they are part of the URL, everything after the question mark (?).
	// e.g. /api/hubs?sortBy=name&limit=5
  const opts ={
    sortBy: req.query.sortBy, 
    limit: req.query.limit,
  }
  userDb.get(opts)
  .then(users => {
    res.status(200).json(users)
  })
  .catch(error => {
    // calling "next" with no parameters moves to the next piece of middleware,
			// calling "next" with a parameter moves to the error middleware.
    next(error)
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
