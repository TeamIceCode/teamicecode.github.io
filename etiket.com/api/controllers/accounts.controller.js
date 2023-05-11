let accountsModel = require('../models/accounts.model');

function getAllAccounts (req, res) 
{
    res.status(200).json(accountsModel);
}

function logIn(req, res)
{
    const { userName, password } = req.body; //inputs from postman
    //const vars to hold msgs
    const USER_NOT_FOUND = 'Username does not exist! please check username.';
    const PASSWORD_IS_INCORRECT = 'Incorrect Password! please try again.';
    const LOGIN_SUCCESS_MSG = userName => `Welcome ${userName}! you have successfully logged in !`; 
    //find the username that matches from postman input
    const accountName = accountsModel.find(accountName => accountName.userName === userName);
    const inputPassword = accountsModel.find(inputPassword => inputPassword.password === password);


    if (accountName && inputPassword) 
    {
        res.status(200).json({
            status: true,
            message: (LOGIN_SUCCESS_MSG(username))
        })

    }
    else
    {
        return res.status(404).json({
            status: false,
            message: !inputPassword ? (PASSWORD_IS_INCORRECT) : (USER_NOT_FOUND)
        })
    }
}

function changePassword(req, res)
{
    const { userName, password } = req.body; //inputs from postman
    //const vars to hold msgs
    const USER_NOT_FOUND = 'Username does not exist';
    const PASSWORD_IS_EMPTY = 'Password cannot be empty';
    const PASSWORD_UPDATED_MSG = userName => `Username ${userName}'s password has been updated`; 
    //find the username that matches from postman input
    const account = accountsModel.find(account => account.userName === userName);

    if (account && password) 
    {
        account.password = password;
        return res.send(PASSWORD_UPDATED_MSG(username));
    }
    else
    {
        return !password ? res.send(PASSWORD_IS_EMPTY) : res.send(USER_NOT_FOUND);
    }
}

function addAccounts(req, res) 
{
    const { userName, password, firstName, lastName, email } = req.body;
    //error handler if fields are empty
    if (!userName || !password || !firstName || !lastName || !email) {
        return res.status(400).json({
            error: 'Please fill out the missing information.'
        });
    }
    accountsModel.push({ userName, password, firstName, lastName, email });
    res.send(`Account ${userName} successfully registered!`);
}

function getAccountByAccountNumber(req, res) {
    const accountNumber = Number(req.params.accountNumber);
    const account = accountsModel[accountNumber];
    if (account) {
        res.json(account);
    } else {
        res.status(404).json({
            error: 'Account does not exist!'
        })
    }
}

module.exports = 
{
    getAllAccounts,
    changePassword,
    getAccountByAccountNumber,
    addAccounts,
    logIn
};