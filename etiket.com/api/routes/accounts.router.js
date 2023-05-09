const express = require('express');

const accountsController = require('../controllers/accounts.controller');

const accountRouter = express.Router();

accountRouter.post('/signup', accountsController.addAccounts);
accountRouter.get('/getAccounts', accountsController.getAllAccounts);
accountRouter.get('/:accountNumber', accountsController.getAccountByAccountNumber);
accountRouter.put('/login', accountsController.logIn);
accountRouter.put('/change-password', accountsController.changePassword );

module.exports = accountRouter;
