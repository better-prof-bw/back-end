const router = require("express").Router();
const Users = require("../users/users-model")

router.get("/",(req, res) => {
    Users.findBy(2)
        .then(students => {
            res.status(200).json({ data: students });
        })
        .catch(err => res.send(err));
});

module.exports = router; 