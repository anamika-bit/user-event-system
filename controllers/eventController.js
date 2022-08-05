const Posts = require("../models/event");
const mongoose = require('mongoose');
const asyncHandler = require("express-async-handler");


//@description           Fetch all events
//@route                 GET /events
//@access                Public 
const getPosts = asyncHandler(async (req, res) => {
    const events = await Posts.find();
    res.json(events);
});


//@description            Add new event
//@route                  POST  /events
//@access                 Private
const createPost = asyncHandler(async (req, res) => {
    const event = await new Posts({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name,
        description : req.body.description,
        date : req.body.date,
        artist : req.body.artist,
        location : req.body.location,
        type : req.body.type        
    });
  
    const savedEvent = await event.save();
    res.json(savedEvent);
});


//@description            Fetch event on some description
//@route                  GET  //events
//@access                 Public
const getPostByQuery = asyncHandler(async (req, res) => {
    const filters = req.query;
    const filteredEvents = Posts.filter(events =>{
        let isValid = false;
        for (key in filters){
            console.log(key,Posts[key],filters[key]);
            if(isValid = Posts[key] == filters[key])
                break;
        }
        return isValid;
    });
    res.send(filteredEvents);
});


//@description            Edit the event
//@route                  PATCH  /events/:id
//@access                 Private
const updatePost = asyncHandler(async (req, res) => {
    const updateEvent = await Posts.updateOne({_id : req.params.productId}, {$set : {Date : req.body.Date}});
    res.json(updateEvent);
});


//@description            Delete a event
//@route                  DELETE  /events/:id
//@access                 Private
const deletePost = asyncHandler(async (req, res) => {
    const deleteEvent = await Posts.deleteOne({ _id: req.params.EventId });
    res.json(deleteEvent);
});
  
module.exports = {
    getPosts,
    createPost,
    getPostByQuery,
    updatePost,
    deletePost
};