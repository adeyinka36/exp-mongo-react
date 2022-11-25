const asyncHandler = require('express-async-handler');
const Users = require('../models/userModel');
const bcrypt = require('bcryptjs');

const getUser = asyncHandler( async(req, res, next) =>{
    let user = await Users.find(req.body.id)
    if(user && await bcrypt.compare(req.body.password, user.password)){
        res.status(200).json({
            "message": "Success",
            "user": user
        })
    }else{
        res.status(401)
        throw new Error('Invalid credentials')
    }
})

const storeUser = asyncHandler( async(req, res, next) =>{
    if(!req.body){
        res.status(400)
        throw new Error('Please add a user')
    }

    const {email, password} = req.body

    let alreadyExists = Users.findOne({email})

    if(alreadyExists){
        res.status(400)
        throw new Error('User  already exists')
    }else{
        const salt = bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt);

        const user = await Users.create({email, password: hashedPassword});

        if(!user){
            res.status(400)
            throw new Error('Error creating user')
        }else {
            return res.status(201).json({
                "message": "User created",
                user
            })
        }
    }
})

const updateUser = asyncHandler( async(req, res, next) =>{
    if(!req.body.user || !req.body.id){
        res.status(400)
        throw new Error('Please provide an id and user')
    }
    let user  = Users.findByIdAndUpdate(res.body.id, req.body.user)
    return res.status(200).json({
        "message": `User has been updated`,
        user
    })
})

const deleteUser = asyncHandler( async(req, res, next) =>{
    if(!req.body.id){
        res.status(400)
        throw new Error('Please add an id')
    }
    Users.findByIdAndDelete(res.body.id)
    return res.status(204).json({
        "message": `User has been deleted`,
    })
})

module.exports = {
    getUser,
    storeUser,
    updateUser,
    deleteUser,
}