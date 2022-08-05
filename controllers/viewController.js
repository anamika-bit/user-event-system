const asyncHandler = require("express-async-handler");
const mongoose = require('mongoose');
const View = require('../models/view');
const Post = require('../models/event');


//@description       Fetch all saved events
//@route             GET  /view
//@access            Private
const getPosts = asyncHandler(async(req,res)=>{
    const docs = await View.findById(req.params.viewId).populate('userId', '_id name');
    
    res.status(200).json({
        count : docs.length,
        Events : docs.map(doc=>{
            return{
                id : doc.id,
                events : doc.events,
                userId : doc.userId,
                request : {
                    type : 'GET',
                    url : 'http://localhost:3000/view/' + doc._id
                }
            }
        })
    });
});


//@description       save an event
//@route             POST  /view/:id
//@access            Private
const createPost = asyncHandler(async(req,res)=>{
   const view = await View.findById(req.params.viewId);
   view.events.push(req.body);
   await view.save();
});


//@description        Delete a event
//@route              DELETE  /view/:id
//@access             Private
const deletePost = asyncHandler(async(req,res)=>{
    const view = View.findById(req.params.viewId);
    view.events.pull({});
    await view.save();
    res.status(200).json({
        message : 'event removed'
    });        
});

module.exports = {
    getPosts,
    createPost,
    deletePost
};