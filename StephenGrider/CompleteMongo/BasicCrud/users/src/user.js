const mongoose = require('mongoose');
// import PostSchema;
const PostSchema = require('./post');
// pull off Schema property
const Schema = mongoose.Schema;


// create new shcema for the user called UserSchema
// UserSchema has a name of type string
// PostsSchema array is a list of nested subdocuments
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters'
    },
    required: [true, 'Name is required']
  },
  posts: [PostSchema],
  likes: Number,
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'blogPost'
  }]
});
// ^---- posts references the PostSchema -left in for code example
//


// Define a virtual field - postCount was removed from the main Schema
// use keyword function instead of fat arrow ... if we use fat arrow
// the context of this will be of the whole file
UserSchema.virtual('postCount').get(function() {
  return this.posts.length;
});

// model instance available as this so use function not fat arroow
UserSchema.pre('remove', function(next) {
  const BlogPost = mongoose.model('blogPost');
  // remove all blogPosts - when done .then
  // go on to next() middleware if there is one
  BlogPost.remove({ _id: { $in: this.blogPosts }})
    .then(() => next());
});

// Is there a connection named user?
// If not, mongoose creates it
// Also anytime working with user expect to have a name and it should be a string
// This is assigned to User ... User represents the entire collection of
// data not a single user
const User = mongoose.model('user', UserSchema);

module.exports = User;
