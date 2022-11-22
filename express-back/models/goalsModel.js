const mongoose = require('mongoose');

const Goals = mongoose.Schema({
        text: {
            type: String,
            required: [true, 'Please add a text value for goal'],
        },
    },
    {
        timestamps: true
    });



module.exports = mongoose.model('Goals', Goals);