
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('projectName', 255)
            .notNullable();
        tbl.text('projectDescription', 255);
        tbl.boolean('status')
            .notNullable();
    })

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resourceName',255)
            .notNullable();
        tbl.text('resourceDescription',255)
            .notNullable();
    })

    .createTable('task', tbl => {
        tbl.increments();
        tbl.text('taskDescription', 255)
            .notNullable();
        tbl.text('notes', 255);
        tbl.boolean('status')
            .notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')            
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
