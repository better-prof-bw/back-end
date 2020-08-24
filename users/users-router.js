const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/",restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ data: users });
        })
        .catch(err => res.send(err));
});

router.put("/:id", restricted, checkRole(["professor"]), (req, res) => {
    res.status(200).json({ hello: "you made it!" });
});

function checkRole(roles) {
    return function (req, res, next) {
        if (roles.includes(req.decodedToken.role)) {
            next();
        } else {
            res.status(403).json({ you: "can't touch this!" });
        }
    };
}

module.exports = router;