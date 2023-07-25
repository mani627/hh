const mongoose = require('mongoose');

// Connection
const myDBConnection = mongoose.createConnection('mongodb://localhost:27017/App_X');



module.exports=myDBConnection