const express = require('express');
const userDb = require('./userDb');
const {validateUserId, validateUser} = require("../middlewares/validate")

const router = express.Router();

//creates an user
router.post('/', validateUser(), (req, res, next) => {
  // do your magic!
 userDb.insert(req.body)
 .then((user) =>{
   console.log(user)
   res.status(201).json(user)
 })

 .catch((error) => {
   next(error)
 })

});

router.post('/:id/posts', validateUserId(), (req, res, next) => {
  // do your magic!
   

});



//-------------------------------------------------------------------------------------------
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

//This will ge a specific user based on the id
router.get('/:id',validateUserId(), (req, res, next) => {
  // do your magic!
    res.status(200).json(req.user)
});

//this will get all posts related to an especific user ID.
router.get('/:id/posts', validateUserId(), (req, res, next) => {
  // do your magic!

  userDb.getUserPosts(req.params.id)
   .then((userPost) => {
     res.status(200).json(userPost)
   })
   .catch((error)=> {
    next(error)
   })
   
});

router.delete('/:id', validateUserId(), (req, res, next) => {
  // do your magic!
  userDb.remove(req.params.id)
  .then( response => {
    if (response > 0){
      res.status(200).json( {
        message: "User has been deleted"
      })
    }else{
      res.status(404).json({
        message: "User to delete not found"
      })
    }
  })
  .catch(error => {
    next(error)
  })
});
//this will update an specific user

router.put('/:id',validateUserId(),validateUser(),  (req, res, next) => {
  // do your magic!

  userDb.update(req.params.id, req.body)
  .then( response => {
    if ( response) {
      res.status(200).json(req.body)
    }
    else{
      res.status(404).json({
        message:"the user coulndt be found"
      })
    }
  })
  .catch(error => {
    next(error)
  })

});



module.exports = router;
