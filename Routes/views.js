const express = require('express');
const router = express.Router();

const { 
    getPosts,
    createPost,
    deletePost
} = require('../controllers/viewController');

const { protect } = require("../middlewares/authMiddleware");

//save events
router.post('/:viewId',protect, createPost);
    
//fetch all events
router.get('/:viewId', protect,getPosts);
   
//remove an event
router.delete('/:viewId',protect, deletePost);
    

module.exports = router;