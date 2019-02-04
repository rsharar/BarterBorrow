const db = require("../db/models");

module.exports = {
    updateUserProfile: function (req,res) {
        console.log("userController")
        db.User.findOneAndUpdate({id:req.params.id},{new: true},req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    findUserById: function (req, res) {
        db.User.findById(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
};