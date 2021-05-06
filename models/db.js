const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Exceed:abcd1234@employeedb.9nf1a.mongodb.net/EmployeeDB?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (!err) { console.log('MongoDB Connection Succeeded.') }
        else { console.log('Error in DB connection : ' + err) }
    });

require('./employee.model');