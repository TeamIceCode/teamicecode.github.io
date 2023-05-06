const express = require('express');
const userRouter = require('./routes/users.router'); //routes
const productsRouter = require('./routes/products.router');
const app = express();
const PORT = 3000;

//Register a middleware function that parses incoming JSON payloads/requests
app.use(express.json());

app.get('/', (req, res) => 
{
    res.send('Hey Multiverse!');
});

app.post('/greeting', (req, res) => 
{
    const name = req.body.name;
    const greeting = `Good Morning master ${name}`;

    res.send(greeting);
});

app.use('/users', userRouter)
app.use('/products', productsRouter);

app.listen(PORT, () => {
    console.log(`Server is listening to http://localhost:${PORT}`);
});