const db = require("../database/connection.js");

module.exports = {
    add,
    find,
    findByInteraction,
    update,
    remove
};

//gets list of all messages users
function find() {
    return db("messages");
}
   
//assigns professor to
async function add(message, sender_id) {
    const newMessage = {
        "message": message.message,
        "reciver": message.reciver,
        "sender": sender_id,
        "sent_at": Date.now()
    }
     
    try {
        const [id] = await db("messages").insert(newMessage, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
} 

function findByInteraction(id, reciver_id) {
    return db("messages")
    .where('sender', id)
    .andWhere('reciver', reciver_id)
}

function update(id, changes) {
    return db('messages')
      .where("id", id)
      .update(changes);
  }
  
function remove(id) {
return db('messages')
    .where("id", id)
    .del();
}
