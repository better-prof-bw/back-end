const router = require("express").Router();
const Messages = require("./messages-model");

router.get("/",(req, res) => {
    Messages.find()
        .then(messages => {
            res.status(200).json({ data: messages });
        })
        .catch(err => res.send(err));
});

router.put('/:id', (req, res) => {
    Messages.update(req.params.user_id, res.body)
    .then(Messages=>{
      res.status(200).json(Messages)
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        message: "Error updating"
      })
    })
});

router.delete('/:id' , (req, res) => {
    Messages.remove( req.params.user_id)
    .then(()=>{
        res.status(200).json({ message: 'The Message has been deleted' })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
        message: "Error removing"
        })
})
});

module.exports = router; 