//validates the user id on every request that expects a user id parameter
const usersDb = require("../users/userDb")


function validateUserId(id){
    return (req, res, next) => {
        usersDb.getById(req.params.id)
        .then((user) => {
            if (user){
                req.user = user

                next()
            }else{
                res.status(404).json({
                    message: "invalid user id"
                })
            }
        }).catch(error => {
            next(error)
        })

    }
}

function validateUser(){
return (req, res, next) => {
    if(!req.body){
        return res.status(400).json({
            message: "missing user data"
        })
        
    } else if(!req.body.name){
        return res.status(400).json({
            message: "missing required name field"
        })
    }
      else{
         next() 
      }
}
}

module.exports = {
    validateUserId, 
    validateUser
}