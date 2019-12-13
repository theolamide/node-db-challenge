
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project-id');
        tbl.text('projectName', 255)
            .notNullable();
        tbl.text('projectDescription', 255);
        tbl.boolean('status')
            .notNullable();
    })

    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.text('resourceName',255)
            .notNullable();
        tbl.text('resorceDescription',255)
            .notNullable();
    })

    .createTable('task', tbl => {
        tbl.text('taskDescription', 255)
            .notNullable();
        tbl.text('notes', 255);
        tbl.boolean('status',0)
            .notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')            
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
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
