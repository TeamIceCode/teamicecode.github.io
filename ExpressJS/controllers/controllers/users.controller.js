let usersModel = require('../models/users.model');

function getAllUsers (req, res) 
{
    res.status(200).json(usersModel);
}

function changePassword(req, res)
{
    const { username, password } = req.body; //inputs from postman
    //const vars to hold msgs
    const USER_NOT_FOUND = 'Username does not exist';
    const PASSWORD_IS_EMPTY = 'Password cannot be empty';
    const PASSWORD_UPDATED_MSG = username => `Username ${username}'s password has been updated`; 
    //find the username that matches from postman input
    const user = usersModel.find(user => user.username === username);

    if (user && password) 
    {
        user.password = password;
        return res.send(PASSWORD_UPDATED_MSG(username));
    }
    else
    {
        return !password ? res.send(PASSWORD_IS_EMPTY) : res.send(USER_NOT_FOUND);
    }
}

function addUsers(req, res) 
{
    // destructed the body from the request para d na kelangan double declare req.body for username at password
    const { username, password } = req.body;
    //error handler if fields are empty
    if (!username || !password) {
        return res.status(400).json({
            error: 'Please fill out the complete information.'
        });
    }
    usersModel.push({username, password});
    res.send(`User ${username} successfully registered!`);
}

module.exports = 
{
    getAllUsers,
    changePassword,
    addUsers
};