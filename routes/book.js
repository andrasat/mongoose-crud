var express = require('express');
var router = express.Router();
var Book = require('../controller/book')

/* GET book list page. */
router.get('/list', Book.listBook)

/* POST add new book */
router.post('/add', Book.createBook)

/* DELETE one book */
router.delete('/delete/:objectId', Book.deleteBook)

/* PUT update a book */
router.put('/update/:objectId', Book.editBook)

module.exports = router;
