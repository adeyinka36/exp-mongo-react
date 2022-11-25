const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"]
    }
},
    {timestamps: true}
)


module.exports = mongoose.model('Users', UserSchema)