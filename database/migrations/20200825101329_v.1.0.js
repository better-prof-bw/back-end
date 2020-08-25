exports.up = function (knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
  
        tbl.string("projectTitle", 128).notNullable();

        tbl.string("dueDate", 128).notNullable();
          
        tbl
          .integer("professor")
          .unsigned()
          .references("users.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        })
      .createTable("students", tbl => {
        tbl.increments();
  
        tbl.string("name", 128).notNullable();
          
        tbl
          .integer("student")
          .unsigned()
          .references("users.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      
        tbl
          .integer("professor")
          .unsigned()
          .references("users.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      .createTable("messages", tbl => {
        tbl.increments();
  
        tbl.string("timeStamp", 128).notNullable();
          
        tbl
          .integer("reciver")
          .unsigned()
          .references("users.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      
        tbl
          .integer("sender")
          .unsigned()
          .references("users.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("projects").dropTableIfExists("students").dropTableIfExists("messages");
  };
  