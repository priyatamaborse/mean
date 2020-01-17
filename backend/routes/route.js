var category = require('../controller/categoryController');
var expense = require('../controller/expenseController');
var users =require('../controller/userController');
var express = require('express');
var router = express.Router();

router.get('/categories',category.getCategory);
router.post('/add',category.addCategory);
router.put('/update/:categoryId',category.updateCategory);
router.delete('/delete/:categoryId',category.deleteCategory);

router.get('/expenses',expense.getExpense);
router.post('/addExpense',expense.addExpense);
router.put('/updateExpense/:expenseId',expense.updateExpense);
router.delete('/deleteExpense/:expenseId',expense.deleteExpense);

router.get('/users',users.getUsers);
router.post('/addUser',users.registerUser);
router.get('/loginUser',users.loginUser);
router.put('/updateUser/:Id',users.updateUser);

module.exports = router;