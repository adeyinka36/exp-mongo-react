const asyncHandler = require('express-async-handler');
const Goals = require('../models/goalsModel')

const getAllTodos = asyncHandler( async(req, res, next) =>{
    let goals = await Goals.find()

      res.status(200).json({
        "message": "Here is all the todos",
        "data": goals
    })
})

const storeTodos = asyncHandler( async(req, res, next) =>{
    if(!req.body){
        res.status(400)
        throw new Error('Please add a goal')
    }

   let  goal = await Goals.create(
        {
           text: req.body.text
        }
    )
    return res.status(201).json({
        "message": "Todo created",
        goal
    })
})

const showTodos = asyncHandler( async(req, res, next) =>{
    if(!req.body.id){
        res.status(400)
        throw new Error('Please add an id')
    }
    let todo = Goals.findById(res.body.id)
    return res.status(200).json({
        "message": `Todo has been updated`,
        todo
    })
})

const updateTodos = asyncHandler( async(req, res, next) =>{
    if(!req.body.id){
        res.status(400)
        throw new Error('Please add an id')
    }
    let todo = Goals.findByIdAndUpdate(res.body.id, {text: req.body.text})
    return res.status(200).json({
        "message": `Todo has been updated`,
        todo
    })
})

const deleteTodos = asyncHandler( async(req, res, next) =>{
    if(!req.body.id){
        res.status(400)
        throw new Error('Please add an id')
    }
    Goals.findByIdAndDelete(res.body.id)
    return res.status(204).json({
        "message": `Todo has been deleted`,
    })
})

module.exports = {
    showTodos,
    updateTodos,
    storeTodos,
    deleteTodos,
    getAllTodos
}