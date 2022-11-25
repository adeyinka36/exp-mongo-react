const mongoose = require('mongoose');

const Goals = mongoose.Schema({
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Users'
        },
        text: {
            type: String,
            required: [true, 'Please add a text value for goal'],
        },
    },
    {
        timestamps: true
    });



module.exports = mongoose.model('Goals', Goals);