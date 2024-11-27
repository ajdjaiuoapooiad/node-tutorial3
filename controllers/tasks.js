const Task = require("../models/Task")

const getAllTasks = (req,res) => {
    res.send('All items from controller')
}

const createTasks =  async (req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({ task })

    }catch(error){
        console.log(error);
        
    }
  }

const getTasks = (req,res) => {
    res.send('get task')
}

const updateTasks = (req,res) => {
    res.send('updated task')
}

const deleteTasks = (req,res) => {
    res.send('deleted task')
}




module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks,

}