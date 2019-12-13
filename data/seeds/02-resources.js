
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {resourceName:'SolidWorks', resourceDescription:'3d modeling software'},
    {resourceName:'Painter', resourceDescription:'Painting machine'},
    {resourceName:'Sand Paper', resourceDescription:'Gritty paper'}
  ]);
};
