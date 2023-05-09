let accountsModel = require('../models/accounts.model');

function getAllAccounts (req, res) 
{
    res.status(200).json(accountsModel);
}

function logIn(req, res)
{
    const { username, password } = req.body; //inputs from postman
    //const vars to hold msgs
    const USER_NOT_FOUND = 'Username does not exist! please check username.';
    const PASSWORD_IS_INCORRECT = 'Incorrect Password! please try again.';
    const LOGIN_SUCCESS_MSG = username => `Welcome ${username}! you have successfully logged in !`; 
    //find the username that matches from postman input
    const accountName = accountsModel.find(accountName => accountName.username === username);
    const inputPassword = accountsModel.find(inputPassword => inputPassword.password === password);

    if (accountName && inputPassword) 
    {
        res.send(LOGIN_SUCCESS_MSG(username));
    }
    else
    {
        return !inputPassword ? res.send(PASSWORD_IS_INCORRECT) : res.send(USER_NOT_FOUND);
    }
}

function changePassword(req, res)
{
    const { username, password } = req.body; //inputs from postman
    //const vars to hold msgs
    const USER_NOT_FOUND = 'Username does not exist';
    const PASSWORD_IS_EMPTY = 'Password cannot be empty';
    const PASSWORD_UPDATED_MSG = username => `Username ${username}'s password has been updated`; 
    //find the username that matches from postman input
    const account = accountsModel.find(account => account.username === username);

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
    // destructed the body from the request para d na kelangan double declare req.body for username at password
    const { username, password, firstName, lastName, email } = req.body;
    //error handler if fields are empty
    if (!username || !password || !firstName || !lastName || !email) {
        return res.status(400).json({
            error: 'Please fill out the missing information.'
        });
    }
    accountsModel.push({username, password, firstName, lastName, email});
    res.send(`Account ${username} successfully registered!`);
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