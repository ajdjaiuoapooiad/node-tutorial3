const express = require('express')
const {getAllTasks, createTasks, getTasks, updateTasks,deleteTasks} = require('../controllers/tasks')
const router =express.Router()

router.route('/')
    .get(getAllTasks)
    .post(createTasks)


router.route('/:id')
    .get(getTasks)
    .delete(deleteTasks)
    .patch(updateTasks)



module.exports = router
