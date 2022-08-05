const express = require('express');
const router = express.Router();

const{
    getPosts,
    createPost,
    getPostByQuery,
    updatePost,
    deletePost
} = require("../controllers/eventController");

const { protect } = require("../middlewares/authMiddleware");

//Post event
router.post('/', protect, createPost);
 
//Get events
router.get('/', getPosts);
 
//Update events
router.patch('/:eventId', protect,updatePost);
   
//Get event by query
router.get('/', getPostByQuery);

//remove event
router.delete("/:eventId", protect , deletePost);

module.exports = router;