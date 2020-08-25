const router = require("express").Router();

const Project = require("./project-model");

router.get("/",(req, res) => {
    Project.find()
        .then(project => {
            res.status(200).json({ data: project });
        })
        .catch(err => res.send(err));
});


module.exports = router;