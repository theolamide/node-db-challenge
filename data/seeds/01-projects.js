
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
        {projectName:'Make 3d model of Power Plant',projectDescription:'This project is a six month long project. Task list will guide you.',status:0},
        {projectName:'Paint Car',projectDescription:'The car needs a blue paint job',status:0},
        {projectName:'3d Print Cup',projectDescription:'A client wants to give his son a bithday gift',status:0}
      ]);
};
