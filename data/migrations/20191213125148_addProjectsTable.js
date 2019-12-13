
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('projectName', 255)
            .notNullable();
    })

    .createTable('task', tbl => {
        tbl.text('taskDescription', 255)
            .notNullable();
        tbl.text('notes', 255);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');;
    })


};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('projects')
};
