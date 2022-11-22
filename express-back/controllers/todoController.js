const asyncHandler = require('express-async-handler');
const Goals = require('../models/goalsModel')

const getAllTodos = asyncHandler( async(req, resd, next) =>{
    let goals = await Goals.find()

      res.status(200).json({
        "message": "Here is all the todos",
        "data": goals
    })
})

const storeTodos = asyncHandler( async(req, res, next) =>{
    console.log(req.body)
    if(!req.body.text){
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
    return res.status(200).json({
        "message": `Here is todo of id ${req.params.id}`
    })
})

const updateTodos = asyncHandler( async(req, res, next) =>{
    return res.status(200).json({
        "message": `Todo of id ${req.params.id} has been updated`
    })
})

const deleteTodos = asyncHandler( async(req, res, next) =>{
    return res.status(200).json({
        "message": `Todo of id ${req.params.id} has been deleted`
    })
})

module.exports = {
    showTodos,
    updateTodos,
    storeTodos,
    deleteTodos,
    getAllTodos
}