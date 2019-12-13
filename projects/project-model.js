const db = require('../data/db-config');

module.exports ={
    find,   //Project-level
    add,    //Project-level
    findById,   //Project-level
    findResources,
    addResource,
    findResourceById,
    findTasksByProjectId,
    addTask
}

function find(){
    return db('projects')
}

function findById(id){
    return db('projects')
        .where({id})
        .first()
}

function add(project){
    return db('projects')
        .insert(project,'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
}

function findResources() {
    return db("resources");
    }

function findResourceById(id) {
    return db("resources")
        .where({ id })
        .first();
    }

function addResource(resource) {    
    return db("resources")
        .insert(resource, 'id')
        .then(ids => {
            const [id] = ids;
        return findResourceById(id);
        });
    }

function findTasksByProjectId(projectId) {
    // select p.projectName
    // , p.projectDescription
    // , * from task 
    // join  projects as p
    // on p.id = task.project_id;

    // let TaskStatus = db('task.status')

    // if (TaskStatus.toString === '0'){
    //     TaskStatus = 'Not Completed'
    //     } else {TaskStatus = 'Completed'}
    
    return db('task')
        .select('p.projectName','p.projectDescription','task.id as taskId','task.taskDescription','task.notes','task.status')
        .join('projects as p','p.id', 'task.project_id')
        .where('project_id', projectId)
}

function addTask(task){
    return db('task')
        .insert(task,'id')
        // .then(ids => {
        //     const [id] = ids;
        //     return findById(id)
        // })
}


