const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Name is requried']
        },
        email:{ 
            type:String,
            requried: [true, 'Email is requried'],
            unique: true
        },
        phone:{
            type: String,
            requried: [true, 'Phone is requried'],
            unique: true
        },
        type:{
            type: String,
            enum:['personal','work'],
            default:'personal'
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Item', itemSchema)