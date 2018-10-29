var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Issue = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('Issue', Issue);