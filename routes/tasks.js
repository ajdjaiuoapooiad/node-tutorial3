const express = require('express')
const {getAllTasks, createTasks, getTasks, updateTasks,deleteTasks} = require('../controllers/tasks')
const router =express.Router()

router.route('/')
    .get(getAllTasks)
    .post(createTasks)


router.route('/:id')
    .get(getTasks)
    .post(deleteTasks)
    .post(updateTasks)



module.exports = router
