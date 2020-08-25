exports.up = function (knex) {
    return knex.schema
      .table("messages", tbl => {
        tbl.dropColumn("timeStamp")

        tbl.string("message", 500)

        tbl.timestamp('sent_at')

      })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("messages");
  };
  