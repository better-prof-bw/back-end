# back-end
}
---------------------------------------
GET /professor/:user_id/students
POST /professor/:user_id/students
req = {
    "name": "student name",
    "student": student_id(integer)
}
---------------------------------------
GET /professor/:user_id/projects
POST /professor/:user_id/projects
req = {
    "projectTitle": "project name",
    "dueDate": "date(string)"
}
---------------------------------------
POST /professor/:user_id/messages
req = {
    "reciver": recievers_id(integer),
    "message": "messege"
}
*i am aware reciever is spelled wrong keep it as is for now.(sorry)
- message date handled in backend
}
---------------------------------------
List of ALL STUDENT USERS: GET /students
}
---------------------------------------
I still need:

GET all recived messages
GET all sent messages

PUT projects
PUT students

DELETE projects
DELETE students