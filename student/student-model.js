const db = require("../database/connection.js");

module.exports = {
    add,
    find,
    findById,
};

//gets list of all student users
function find(professor_id) {
    return db("students").where("professor", professor_id);
}

//assigns professor to
async function add(student, professor_id) {
    const newStudent = {
        "name": student.name,
        "student": student.student,
        "professor": professor_id
    }
    
    try {
        const [id] = await db("students").insert(newStudent, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
} 

function findById(id) {
    return db("students").where({ id }).first();
}