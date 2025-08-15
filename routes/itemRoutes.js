const express = require('express')
const router = express.Router();
const {
    createItem,
    getItems,
    getTtemById,
    updateItem,
    deleteItem    
} = require('../controllers/itemController')

router.post('items',createItem)
