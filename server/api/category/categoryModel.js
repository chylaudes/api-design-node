var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
  // posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
});

module.exports = mongoose.model('category', CategorySchema);
