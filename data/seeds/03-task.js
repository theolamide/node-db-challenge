
exports.seed = function(knex) {
  return knex('task').insert([
    {project_id: 1 , resource_id: 1, taskDescription:'Use Solidworks to get real world representation of the plant.', notes:'No notes. You know what to do.', status: 0}
  ])
};
