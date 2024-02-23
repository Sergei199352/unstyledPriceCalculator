const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json()); // Middleware to parse JSON request bodies

app.post('/storequote', (req, res) => {
    const { quoteName, salary, days } = req.body;
    console.log('Received data from frontend:', quoteName, salary, days);
    res.send(quoteName); // Just sending back the quoteName as a response for now
});

app.use(function(req, res, next) {
    res.status(404).send('Oops! Something went wrong...');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
