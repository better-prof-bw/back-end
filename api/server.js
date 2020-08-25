const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/authRouter.js");
const usersRouter = require("../users/users-router.js");
const projectRouter = require('../projects/project-router');
const studentRouter = require('../student/student-router');
const mesagesRouter = require('../messages/messages-router')
const professorRouter = require('../professor/professor-router')
const server = express();
 
server.use(helmet());
server.use(express.json());
server.use(cors())

server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use('/projects', projectRouter)
server.use('/students', studentRouter)
server.use('/messages', mesagesRouter) 

server.use('/professor', professorRouter) 

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server; 