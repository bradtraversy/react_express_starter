const express = require('express');
require('./DB');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/customers', router);

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
