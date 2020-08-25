const db = require("../database/connection.js");

module.exports = {
    add,
    find,
    findById,
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

function findById(id) {
    return db("messages").where({ id }).first();
}


