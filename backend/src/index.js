const express = require('express');
const routes = require('./routes');

const knex = require('../src/database/knex.js');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);