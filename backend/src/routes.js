const express = require('express');

const routes = express.Router();

routes.post('/usuario', (request, response) => {
    const data = request.body;

    console.log(data);

    return response.json();
});

module.exports = routes;