const db = require("../database/connection.js");

module.exports = {
    add,
    find,
    findByProfessor,
    findById,
};

function find() {
    return db("projects");
}

function findByProfessor(user_id) {
    return db('projects').where("professor", user_id)
}

async function add(project, user_id) {
    const newProject = {
        "projectTitle": project.projectTitle,
        "dueDate": project.dueDate,
        "professor": user_id
    }
    try {
        const [id] = await db("projects").insert(newProject, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}

function findById(id) {
    return db("projects").where({ id }).first();
}