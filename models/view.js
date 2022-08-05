const mongoose = require('mongoose');

const viewSchema = mongoose.Schema({
    id : mongoose.Schema.Types.ObjectId,
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    events : [{
        type : mongoose.Schema.Types.ObjectId,
        ref :  'Event'
    }]
});

module.exports = mongoose.model('View',viewSchema);