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
                    message: "user not found"
                })
            }
        })

    }
}