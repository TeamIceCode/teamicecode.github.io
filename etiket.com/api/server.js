const express = require('express');
const accountRouter = require('./routes/accounts.router'); //routes
const app = express();
const PORT = 3000;

//Register a middleware function that parses incoming JSON payloads/requests
app.use(express.json());


// middleware logger
app.use((req, res, next) => {
    const start = Date.now();
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');  
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use('/accounts', accountRouter);

app.listen(PORT, () => {
    console.log(`Server is listening to http://localhost:${PORT}`);
});
