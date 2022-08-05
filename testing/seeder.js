const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Posts = require('../models/event')
const Users = require('../models/user')

const connectDB = require('../config/db')
const {posts,users} = require('./data/posts')



dotenv.config()
connectDB()

const importData = async () => {
    try{
        await Posts.deleteMany();
        await Posts.insertMany(posts);
        await Users.deleteMany();
        await Users.insertMany(users);
        console.log("Data Imported")
        process.exit()

    }catch(err) {
        console.log(err)
        process.exit(1)
    }
}

importData()