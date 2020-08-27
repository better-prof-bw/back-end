const router = require("express").Router();
const Project = require('../projects/project-model');
const Students = require('../student/student-model');
const Messages = require('../messages/messages-model')
const restricted = require("../auth/restricted-middleware.js");
/////////////////////////projects//////////////////////////////////////
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
router.put('/:user_id/projects/:project_id', (req, res) => {
    Project.update(req.params.user_id, req.params.project_id,  req.body)
    .then(projects=>{
      res.status(200).json(projects)
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        message: "Error updating"
      })
    })
});
router.delete('/:user_id/projects/:project_id' , (req, res) => {
    console.log(req.params.user_id, req.params.project_id)
    Project.remove( req.params.user_id, req.params.project_id)
    .then(()=>{
        res.status(200).json({ message: 'The projects has been deleted' })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
        message: "Error removing"
        })
})
});

///////////////////////////students////////////////////////////////////
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
router.put('/:user_id/students/:id', (req, res) => {
    Students.update(req.params.id, req.body)
    .then(Students=>{
      res.status(200).json(Students)
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        message: "Error updating"
      })
    })
});
router.delete('/:user_id/students/:id' , (req, res) => {
    Students.remove( req.params.id)
    .then(()=>{
        res.status(200).json({ message: 'The Students has been deleted' })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
        message: "Error removing"
        })
})
});

////////////////////////////messages///////////////////////////////////////
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