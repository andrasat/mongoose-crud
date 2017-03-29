var express = require('express');
var router = express.Router();
var Transaction = require('../controller/transaction')

/* GET book list page. */
router.get('/list', Transaction.listTransaction)

/* POST add new book */
router.post('/add', Transaction.createTransaction)

/* DELETE one book */
// router.delete('/delete/:objectId', Transaction.deleteTransaction)

/* PUT update a book */
// router.put('/update/:objectId', Transaction.editTransaction)

module.exports = router;
