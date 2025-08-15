const Item = require('../models/itemModel')

const createItem = async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem)
    } catch (err){
        if (err.name === 'ValidationError'){
        return res.status(400).json({err:err.message})
        }
        res.status(500).json({err: 'server Error'})
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
    }catch (err){
        if (err.name === 'CastError'){
        return res.status(400).json({err: 'Invlid ID format'})
        }
        res.status(500).json({error: 'server Error'})
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
        if (err.name === 'ValidationError'){
        return res.status(400).json({err:err.message})
        }
        if (err.name === 'CastError'){
        return res.status(400).json({err: 'Invlid ID format'})
        }
        res.status(500).json({error: 'server Error'})
    }
}

const deleteItem = async (req , res) => {
    try {
        const deleteItem = await Item.findByIdAndDelete(req.params.id);
        if (!deleteItem) return res.status(404).json({error: 'Item not found'})
        res.status(200).json({message: 'Item deleted successfully'});
    } catch (err) {
        if (err.name === 'CastError'){
        return res.status(400).json({err: 'Invlid ID format'})
        }
        res.status(500).json({err: 'Server Error'});
    }
}


module.exports ={
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
}
