var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
 username: {
   type: String,
   //type vs state: String.  if you use State.  then username is an object
   required: true,
   unique: true
 }
 // posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model('user', UserSchema);
