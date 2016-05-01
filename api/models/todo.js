var mongoose = require('mongoose');

var fileSchema = mongoose.Schema({

    todo       : String,
    created    : { type:Date, default:Date.now },
    completed  : Boolean

});
module.exports = mongoose.model('Todo', fileSchema);