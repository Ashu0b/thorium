const express = require('express');
const router = express.Router();
const authorController = require('../controller/author');
const blogsController = require('../controller/blogs');
const loginController = require('../controller/loginController');
const middleware = require('../middleware/auth');
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// Author
router.post('/author',authorController.authorCreate);
router.post('/login',loginController.loginAuthor)

// Blogs
router.post('/blogs',blogsController.blogsCreate);
router.get('/blogs',middleware.authentication,blogsController.getBlogs);
router.put('/blogs/:blogId',middleware.authentication,middleware.authorization1,blogsController.updateBlog);
router.delete('/blogs/:blogId',middleware.authentication,middleware.authorization1,blogsController.deleteBlog);
router.delete('/blogs',middleware.authentication,middleware.authorization2,blogsController.deleteBlogs)
module.exports = router;