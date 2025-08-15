const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Name is requried'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters long']
        },
        email:{ 
            type:String,
            requried: [true, 'Email is requried'],
            unique: true,
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
        },
        phone:{
            type: String,
            requried: [true, 'Phone is requried'],
            unique: true,
            minlength:[10, 'Phone number must be at least 10 digits'],
            maxlength:[15, 'Phone number must be exceed 15 digits']
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