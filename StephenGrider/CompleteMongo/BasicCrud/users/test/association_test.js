const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');

describe('Associations', () => {
  // assign variables in beforeEach make sure they are outside of the scope
  let joe, blogPost, comment;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    blogPost = new BlogPost({ title: 'JS is Great', content: 'Yep, it really is'});
    comment = new Comment({ content: 'Congrats on the great post'});

    // associate a user with a blog post
    // This pushes blogPost into the blogPosts array in the users model
    joe.blogPosts.push(blogPost);
    // association between blog post and comment
    // push in comment model into the array
    blogPost.comments.push(comment);
    // comment has one user - associate it with joe
    comment.user = joe;

    // save - use Promise all
    // .then will only happen once all 3 save attempts have been completed
    Promise.all([joe.save(), blogPost.save(), comment.save()])
      .then(() => done());
  });


  // populate(blogPosts)  ... comes from comment.js
  it('saves a relation between a user and a blogpost', (done) => {
    User.findOne({ name: 'Joe' })
      .populate('blogPosts')
      .then((user) => {
        assert(user.blogPosts[0].title === 'JS is Great');
        done();
      });
  });

  // path: -- inside of the user we fetch recursively load this resource
  /*
  User.findOne finds a user
  In that user find the blogPost property and load up all the blogPosts
  The populate means inside of all the blogPosts you fetched
  find the commeents property and attempt to load up all the comments
  that belong to the blog post
  */
  it('saves a full relation graph', (done) => {
    User.findOne({ name: 'Joe' })
      .populate({
        path: 'blogPosts',
        populate: {
          path: 'comments',
          model: 'comment',
          populate: {
            path: 'user',
            model: 'user'
          }
        }
      })
      .then((user) => {
        assert(user.name === 'Joe');
        assert(user.blogPosts[0].title === 'JS is Great');
        assert(user.blogPosts[0].comments[0].content === 'Congrats on the great post');
        assert(user.blogPosts[0].comments[0].user.name === 'Joe');

        done();
      });
  });
});
