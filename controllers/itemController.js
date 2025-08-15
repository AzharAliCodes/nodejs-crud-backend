const Item = require('../models/itemModel')

const createItem = async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem)
    } catch (err){
        res.status(400).json({err:err.message})
    }
};

const getItems = async (req, res) =>{
    try {
        const items = await Item.find()
        res.status(200).json(items);
    } catch (err){
        res.status(500).json({err:err.message})
    }
}

const getItemById = async (req,res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({error : 'Item Not found'})
         res.status(200).json(item);
    }catch (error){
        res.status(400).json({err: 'Invlid ID format'})
    }
}

const updateItem = async (req, res) =>{
    try {
        const updateItem = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators:true}
        );
        if (!updateItem) return res.status(404).json({error: 'Item Not found'});
        res.status(200).json(updateItem);
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

const deleteItem = async (req , res) => {
    try {
        const deleteItem = await Item.findByIdAndDelete(req.params.id);
        if (!deleteItem) return res.status(404).json({error: 'Item not found'})
        res.status(200).json({message: 'Item deleted successfully'});
    } catch (err) {
        res.status(400).json({err: 'Invalid ID format'});
    }
}


module.exports ={
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
}


// Task 5: Error Handling & Validation

// Add proper error messages for invalid requests.

// Validate incoming data using Mongoose validation rules.

// Return correct HTTP status codes (400, 404, 500).

// Task 6: API Testing with Postman

// Test every endpoint (POST, GET all, GET by ID, PUT, DELETE).

// Check success responses and error scenarios.

// Document example requests & responses in Postman (optional: export collection).

// Task 7: Project Cleanup & Documentation

// Remove test routes like /test-add.

// Clean unused code/files.

// Write a README.md with project setup, endpoints, and usage.