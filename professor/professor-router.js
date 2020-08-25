const router = require("express").Router();
const Project = require('../projects/project-model');
const Students = require('../student/student-model');
const Messages = require('../messages/messages-model')
const restricted = require("../auth/restricted-middleware.js");

router.post("/:user_id/projects",(req, res) => {
    const project = req.body

    Project.add(project, req.params.user_id)
        .then(user => {
            res.status(201).json({ message: "Registration was successful!" });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
});
router.get("/:user_id/projects",(req, res) => {
    Project.find(req.params.user_id)
        .then(project => {
            res.status(200).json({ data: project });
        })
        .catch(err => res.send(err));
});


router.get("/:user_id/students",(req, res) => {
    Students.find(req.params.user_id)
        .then(students => {
            res.status(200).json({ data: students });
        })
        .catch(err => res.send(err));
});
router.post("/:user_id/students",(req, res) => {
    const student = req.body
 
    Students.add(student, req.params.user_id)
        .then((student) => { 
            res.status(201).json({ message: student });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
});

router.post("/:user_id/messages",(req, res) => {
    Messages.add(req.body, req.params.user_id)
        .then((message) => { 
            res.status(201).json({ message: message });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
});
module.exports = router;  