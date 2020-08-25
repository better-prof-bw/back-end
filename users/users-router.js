const router = require("express").Router();
const Project = require('../projects/project-model');
const Students = require('../student/student-model')
const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/",restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ data: users });
        })
        .catch(err => res.send(err));
});

module.exports = router; 