const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date 
    },
    artist : {
        type : String
    },
    location : {
        type : String
    },
    type : {
        type : String,
        enum : ['EDM','Techno','Hip-Hop']
    }
});

module.exports = mongoose.model('Event',eventSchema);