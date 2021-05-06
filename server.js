require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening to PORT ${port}. Go to http://localhost:${port}/employee`);
});

app.get('/', (req,res) => {
    res.redirect('/employee');
})
app.use('/employee', employeeController);