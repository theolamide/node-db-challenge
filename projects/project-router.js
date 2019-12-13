const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req,res) => {
    Projects.find()
    .then(projects =>{
        res.json(projects);
    })
    .catch(err => {
        res.status(500)
        .json({message: 'Failed to load project list'})
    })
})

router.post('/', (req,res) => {
    const projectData = req.body;

    Projects.add(projectData)
        .then(project =>{
            res.status(201)
            .json(project);
        })
        .catch (err => {
            res.status(500)
            .json({ message: 'Failed to create new project' });
        });
})

router.get("/resources", (req, res) => {
    Projects.findResources()
        .then(resources => {
            res.status(200)
            .json(resources);
        })
        .catch(err => {
            res.status(500)
            .json({ errorMessage: "Failed to get resources" });
        });
});

router.post("/:id/resources", (req, res) => {
    const { id } = req.params;
    const newResource = req.body;

    if (!newResource.resourceName) {
        res.status(400)
        .json({errorMessage: "Please provide a name for the resource."
        });
    } else {
        Projects.addResource(newResource, id)
        .then(resource => {
            res.status(201)
            .json(resource);
        })
        .catch(err => {
            res.status(500)
            .json({errorMessage: "Failed to add resource"
        });
        });
    }
});

router.get('/:id/tasks', (req,res) => {
    const {id} = req.params

    Projects.findTasksByProjectId(id)
    .then(tasks => {
        if (tasks) {
            res.json(tasks)
        } else {
            res.status(404)
            .json({message: 'Could not find tasks for given project id'})
        }
    })
    .catch(err => {
        res.status(500)
        .json({ message: 'Failed to get tasks' });
    });
})

router.post('/:id/tasks',(req,res) => {
    const {id} = req.params;
    const newTask = req.body;

    if(!newTask.taskDescription){
        res.status(400)
        .json({message: 'The task description cannot be left null. Please provide some direction.'})
    } else {
        Projects.addTask(newTask)
        .then(task => {
            res.status(201)
            .json(task);
        })
        .catch(error => {
            res.status(500)
            .json({errorMessage: 'Failed to add tasks'})
        })
    }
})



module.exports = router;