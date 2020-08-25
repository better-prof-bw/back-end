const router = require("express").Router();
const Messages = require("./messages-model");

router.get("/",(req, res) => {
    Messages.find()
        .then(messages => {
            res.status(200).json({ data: messages });
        })
        .catch(err => res.send(err));
});

router.post("/:id",(req, res) => {
    Messages.add(req.body, req.params.id)
        .then((message) => { 
            res.status(201).json({ message: message });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
});

module.exports = router; 