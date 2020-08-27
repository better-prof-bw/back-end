const db = require("../database/connection.js");

module.exports = {
    add,
    find,
    findByProfessor,
    findById,
    update,
    remove
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

function update(user_id, project_id, changes) {
    return db('projects')
      .where("professor", user_id)
      .andWhere("id", project_id)
      .update(changes);
  }
  
function remove(user_id, project_id) {
return db('projects')
    .where("professor", user_id)
    .andWhere("id", project_id)
    .del();
}