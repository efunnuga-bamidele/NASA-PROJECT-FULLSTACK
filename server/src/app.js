const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router')

const app = express(); 

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/planets', planetRouter);
app.use('/launches', launchesRouter);  

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

/* 
Steps to MVC create

1.  create the router to manage the data to be sent
2.  use the controller through a function(req, res ) {
     returns the data from the model
}

3.  use the route to access the controller function() and pass it into const function = express.Route() 
        function.get('/link', controller function)
        
4.  use app.use(routerufunction)


*/
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;
